import type { ITopic } from "../../@types/topic";
import { api } from "./base";
import { Events } from "./events";

const Topics = {
    index: async (): Promise<ITopic[]> => { 
        const response = await api.get<ITopic[]>("tipo");
        
        const topics = response.data.map(async (topic) => {
            const eventsCount = await Events.index(topic.id).then(events => events.length);

            return {
                ...topic,
                eventsCount
            } as ITopic;
        })

        return Promise.all(topics);
    }
}

export { Topics };