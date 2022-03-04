import { IEventCardProps, IEventPost } from "../../@types/event";
import { getFormatedDay, getFormatedTime, getShortMonth } from "../../utils/date";
import { api } from "./base";

const Events = {
    index: async (topic: number) => {
        const response = await api.get<IEventPost[]>(`events?tipoId=${topic}`);
        const eventsRaw = response.data;

        const events: IEventCardProps[] = eventsRaw.map((event) => {
            const startDate = new Date(event.dataInicio);
            const createdAt = new Date(event.dataPublicacao);

            return {
              id: event.id,
              title: event.titulo,
              description: event.descricao,
              data: `${getFormatedDay(startDate)}/${getShortMonth(startDate)}`,
              time: `${getFormatedTime(startDate)}`,
              createdAt: createdAt.getTime(),
              timestamp: startDate.getTime(),
              author: event.organizador,
              link: event.link,
            };
        }).sort((a, b) => a.timestamp - b.timestamp);

        return events;
    }
    
}

export { Events };
