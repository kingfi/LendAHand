const CosmosClient = require('@azure/cosmos').CosmosClient;

const config = require('./config');

const endpoint = config.endpoint;
const key = config.key;

const client = new CosmosClient({ endpoint, key });

const HttpStatusCodes = { NOTFOUND: 404 };

const databaseId = config.database.id;
const containerId = config.container.id;
const partitionKey = { kind: "Hash", paths: ["/Country"] };

 /**
 * Create the database if it does not exist
 */
 async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  console.log(`Created database:\n${database.id}\n`);
}

/**
* Read the database definition
*/
async function readDatabase() {
  const { resource: databaseDefinition } = await client.database(databaseId).read();
 console.log(`Reading database:\n${databaseDefinition.id}\n`);
}

/**
* Exit the app with a prompt
* @param {message} message - The message to display
*/
function exit(message) {
  console.log(message);
  console.log('Press any key to exit');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
}

createDatabase()
  .then(() => readDatabase())
  .then(() => createContainer())
  .then(() => readContainer())
  .then(() => { exit(`Completed successfully`); })
  .catch((error) => { exit(`Completed with error ${JSON.stringify(error) }`) });

  /**
* Create the container if it does not exist
*/

async function createContainer() {

    const { container } = await client.database(databaseId).containers.createIfNotExists({ id: containerId, partitionKey }, { offerThroughput: 400 });
    console.log(`Created container:\n${config.container.id}\n`);
   }
   
   /**
    * Read the container definition
   */
   async function readContainer() {
      const { resource: containerDefinition } = await client.database(databaseId).container(containerId).read();
    console.log(`Reading container:\n${containerDefinition.id}\n`);
   }

/**
 * Action to occur when user inputs their organization name and clicks Event List
 */
$("#to-event-list-btn").click (
    
    function () {
                    
        var businessGuid = guid ();
        
        createUser (businessGuid);
        
        createBusiness (businessGuid);
        
        
        
        $("#signUpSuccessfulSignUp").removeClass ("pageHiddenRightSignUp", 400); // this
        $("#newCompanyAccountSixSignUp").addClass ("pageHiddenLeftSignUp", 400);
        
    }

);

/**
 * Action to occur when user inputs their organization name and clicks New Event
 */
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