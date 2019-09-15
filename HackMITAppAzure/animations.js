$("#to-event-list-btn").click (
    
    function () {
                    
        var businessGuid = guid ();
        
        createUser (businessGuid);
        
        createBusiness (businessGuid);
        
        
        
        $("#signUpSuccessfulSignUp").removeClass ("pageHiddenRightSignUp", 400); // this
        $("#newCompanyAccountSixSignUp").addClass ("pageHiddenLeftSignUp", 400);
        
    }

);

$("#new-event-btn").click (
    
    function () {
                    
        var businessGuid = guid ();
        
        createUser (businessGuid);
        
        createBusiness (businessGuid);
        
        
        
        $("#signUpSuccessfulSignUp").removeClass ("pageHiddenRightSignUp", 400); // this
        $("#newCompanyAccountSixSignUp").addClass ("pageHiddenLeftSignUp", 400);
        
    }

);

function createOrganization () {
        
    var name = $("#org-name").val ();
    
}

async function createPost (postID, organizationName) {

    var orgName = organizationName;
    var eventName = $("#event-name").val ();
    var eventDescription = $("#event-description").val ();
    var eventDate = $("#event-date").val ();
    var eventAddress = $("#event-address").val ();
    var volunteersNeeded = $("#event-volunteers").val ();
    var volunteersHad = 0;
    const { item } = await client.database(databaseId).container(containerId).items.upsert(itemBody);
    console.log(`Created family item with id:\n${itemBody.id}\n`);

}

function guid () {
        
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    
}