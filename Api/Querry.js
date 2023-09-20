import {client} from '@/sanity/lib/client'

export async function fetchConversationMessages(user1Id, user2Id) {
    const query = `*[_type == "conversation" && (
      users.user1._ref == $user1Id && users.user2._ref == $user2Id ||
      users.user1._ref == $user2Id && users.user2._ref == $user1Id
    )] {
      messages[] {
        text,
        image,
        sender->,
        reaction,
        timestamp,
        seen,
        seenBy[]->
      }
    }`;
  
    const params = {
      user1Id: user1Id,
      user2Id: user2Id,
    };
  
    const result = await client.fetch(query, params);
  
    return result[0].messages;
  }

export async function sendMessage(conversationId, messageText, senderId) {
    // Create a new message object
    const newMessage = {
      text: messageText,
      sender: {
        _type: 'reference',
        _ref: senderId,
      },
      timestamp: new Date().toISOString(),
      seen: false,
      seenBy: [],
    };
  
    // Create a transaction to update the conversation document
    const transaction = client.transaction();
  
    // Add the new message to the messages array in the conversation document
    transaction.patch(conversationId, (patch) =>
      patch
        .setIfMissing({ messages: [] })
        .append('messages', [newMessage])
    );
  
    // Commit the transaction
    const result = await transaction.commit();
  
    return result.results[0].document;
  }

 export async function fetchSiteData() {
    try {
      // Define your query
      const query = '*[_type == "siteData"]';
  
      // Fetch the data from the API
      const response = await client.fetch(query);
  
      // Return the fetched data
      return response;
    } catch (error) {
      console.error('Error fetching site data:', error);
      return null;
    }
  }