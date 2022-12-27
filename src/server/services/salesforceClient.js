const jsforce = require('jsforce');

module.exports = class SalesforceClient {
    client;

    /**
     * Connects to Salesforce using jsForce
     * @param {string} loginUrl
     * @param {string} username
     * @param {string} password
     * @param {string} version
     */
    async connect(loginUrl, username, password, version) {
        try {
            const client = new jsforce.Connection({
                loginUrl,
                version
            });
            const loginResult = await client.login(username, password);
            console.log(
                `Connected to Salesforce org ${loginResult.organizationId}: ${client.instanceUrl}`
            );
            this.client = client;
        } catch (err) {
            throw new Error(`Failed to connect to Salesforce: ${err}`);
        }
    }
};
