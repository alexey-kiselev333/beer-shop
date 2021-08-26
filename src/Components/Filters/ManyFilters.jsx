import Filter from "./Filter";
import {Button} from "@material-ui/core";



export const filters = [
    {name: "abv_gt", type: "number", description: "ABV greater than"},
    {name: "abv_lt", type: "number", description: "ABV less than"},
    {name: "ibu_gt", type: "number", description: "IBU greater than "},
    {name: "ibu_lt", type: "number", description: " IBU less than"},
    {name: "ebc_lt", type: "number", description: " EBC greater than"},
    {name: "yeast", type: "string", description: "Yeast name"},
    {name: "brewed_before", type: "date", description: "Brewed before"},
    {name: "brewed_after", type: "date", description: "Brewed after"},
    {name: "hops", type: "string", description: "Hops name"},
    {name: "malt", type: "string", description: "Malt name"},
    {name: "food", type: "string", description: "Food"},
    {name: "ids", type: "string", description: "ID's"},
];

const ManyFilters = function ({handleChange,sendRequest}) {

    return (
        <div className="d-flex flex-wrap justify-between">
            {filters.map((item) => (
                <Filter
                    handleChange={handleChange}
                    params={item}
                    key={item.name}
                    name={item.name}
                />
            ))}
            <div className="button-wrapper">
                <Button onClick={sendRequest} variant="contained" color="secondary">
                    Apply filters
                </Button>
            </div>
        </div>
    );
};

export default ManyFilters;




