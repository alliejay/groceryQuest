"use strict";
var InMemoryDataListService = (function () {
    function InMemoryDataListService() {
    }
    InMemoryDataListService.prototype.createDb = function () {
        var listItems = [
            {
                id: 1,
                title: "Grapes"
            },
            {
                id: 2,
                title: "Italian Bread"
            }
        ];
        return { listItems: listItems };
    };
    return InMemoryDataListService;
}());
exports.InMemoryDataListService = InMemoryDataListService;
//# sourceMappingURL=in-memory-data-list-service.js.map