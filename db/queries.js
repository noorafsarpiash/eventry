import { eventModel } from "@/models/event-models"
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import { userModel } from "@/models/user-model";
async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}

async function createUser(user){
    return await userModel.create(user)
}


async function fundUserByCredentials(credentials){
    const user = await userModel.findOne(credentials).lean();
    if(user){
        return replaceMongoIdInArray(user);
    }
    return null;
}

export {
    getAllEvents,
    getEventById,
    createUser,
    fundUserByCredentials
 
}