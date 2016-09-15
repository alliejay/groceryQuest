import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataListService implements InMemoryDbService {
    createDb() {
        let listItems = [
            {
                id: 1,
                title: "Grapes"
            },
            {
                id: 2,
                title: "Italian Bread"
            }
        ];
        return {listItems};
    }
}

