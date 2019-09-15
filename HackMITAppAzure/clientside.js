/**
 * Action to occur when user inputs their organization name and clicks Event List
 */
$("#to-event-list-btn").click(

    function() {

        createOrganization();

    }

);

/**
 * Action to occur when user inputs their organization name and clicks New Event
 */
$("#new-event-btn").click(

    function() {

        createOrganization();
    }

);
/**
 * Action to occur when organization makes new event
 */
$("ad-entry-btn").click(
    function() {

        var postID = guid();
        createPost(postID, localOrganizationName);

    }
);

/**
 * Action to occur when volunteer enters zipcode
 */
$("zipcode-entry-button").click(
    function() {

        localZipcode = $("#zipcode-input").val();

    }
);

async function createOrganization(organizationJson) {

    //for ()
    //localOrganizationName = $("#org-name").val ();
    //var name = localOrganizationName;
    const { item } = await client.database(databaseId).container(containerId).items.upsert(organizationJson);
}

async function createPost(postID, organizationName) {

    var orgName = organizationName;
    var eventName = $("#event-name").val();
    var eventDescription = $("#event-description").val();
    var eventDate = $("#event-date").val();
    var eventAddress = $("#event-address").val();
    var volunteersNeeded = $("#event-volunteers").val();
    var volunteersHad = 0;
    const { item } = await client.database(databaseId).container(containerId).items.upsert(itemBody);

}

function guid() {

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

}