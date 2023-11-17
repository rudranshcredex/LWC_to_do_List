({
    sendEmail: function(component, event, helper) {
        var emailSubject = component.get("v.emailSubject");
        var emailTo = component.get("v.emailTo");
        var emailBody = component.get("v.emailBody");

        var action = component.get("c.sendEmail");
        action.setParams({
            emailSubject: emailSubject,
            emailTo: emailTo,
            emailBody: emailBody,
            attachments: component.get("v.uploadedFiles")
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email: ' + response.getError()[0].message);
            }
        });

        $A.enqueueAction(action);
    },

    handleUploadFinished: function (component, event, helper) {
        var uploadedFiles = event.getParam("files");
        component.set("v.uploadedFiles", uploadedFiles);
    }
})
