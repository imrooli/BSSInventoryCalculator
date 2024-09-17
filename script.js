// Sample recipes and blender recipes
const recipes = {
    "Hydroponic Planter": {
        "Blue Extract": 750,
        "Magic Bean": 75,
        "Soft Wax": 500,
        "Caustic Wax": 25
    },
    "Petal Planter": {
        "Magic Bean": 100,
        "Glitter": 100,
        "Soft Wax": 250,
        "Swirled Wax": 50,
        "Super Smoothie": 25
    },
    "Heat-Treated Planter": {
        "Red Extract": 750,
        "Magic Bean": 75,
        "Hard Wax": 150,
        "Swirled Wax": 25
    },
    "Red Clay Planter": {
        "Honey": 10000000,
        "Magic Bean": 5,
        "Red Extract": 15,
        "Soft Wax": 20
    },
    "Blue Clay Planter": {
        "Honey": 10000000,
        "Magic Bean": 5,
        "Blue Extract": 15,
        "Soft Wax": 20
    },
    "Candy Planter": {
        "Honey": 5000000,
        "Magic Bean": 5,
        "Gumdrops": 30,
        "Soft Wax": 5
    },
    "Tacky Planter": {
        "Honey": 50000000,
        "Magic Bean": 10,
        "Purple Potion": 1,
        "Hard Wax": 5,
        "Soft Wax": 20
    },
    "Pesticide Planter": {
        "Honey": 750000000,
        "Magic Bean": 25,
        "Neonberry": 25,
        "Glue": 15,
        "Caustic Wax": 3,
        "Hard Wax": 10
    },
    "Gummy Boots": {
        "Glue": 500,
        "Glitter": 250,
        "Red Extract": 250,
        "Blue Extract": 250
    },
    "Coconut Clogs": {
        "Honey": 10000000000,
        "Coconut": 150,
        "Tropical Drink": 50,
        "Glue": 100,
        "Oil": 100,
        "Refreshing Vial": 1
    },
    "Cobalt Guard": {
        "Honey": 200000000,
        "Enzymes": 50,
        "Glitter": 25,
        "Stinger": 100,
        "Blue Extract": 100
    },
    "Crimson Guard": {
        "Honey": 200000000,
        "Oil": 50,
        "Glitter": 25,
        "Stinger": 100,
        "Red Extract": 100
    },
    "Honeycomb Belt": {
        "Honey": 75000000,
        "Enzymes": 50,
        "Glue": 50,
        "Oil": 25
    },
    "Petal Belt": {
        "Honey": 15000000000,
        "Spirit Petal": 1,
        "Star Jelly": 25,
        "Glitter": 50,
        "Glue": 100
    },
    "Coconut Belt": {
        "Honey": 7500000000000,
        "Coconut": 500,
        "Tropical Drink": 1500,
        "Purple Potion": 200,
        "Hard Wax": 200,
        "Turpentine": 3,
        "Refreshing Vial": 3
    },
    "Coconut Canister": {
        "Tropical Drink": 150,
        "Coconut": 250,
        "Red Extract": 150,
        "Blue Extract": 150,
        "Caustic Wax": 50,
        "Refreshing Vial": 2,
        "Honey": 25000000000
    },
    "Bubble Mask": {
        "Honey": 100000000,
        "Blueberry": 500,
        "Glitter": 15,
        "Oil": 25,
        "Blue Extract": 50
    },
    "Demon Mask": {
        "Honey": 5000000000,
        "Enzymes": 150,
        "Glue": 100,
        "Stinger": 500,
        "Invigorating Vial": 1,
        "Red Extract": 250
    },
    "Diamond Mask": {
        "Honey": 5000000000,
        "Oil": 150,
        "Glitter": 100,
        "Diamond Egg": 5,
        "Comforting Vial": 1,
        "Blue Extract": 250
    },
    "Gummy Mask": {
        "Honey": 5000000000,
        "Glue": 250,
        "Enzymes": 100,
        "Oil": 100,
        "Glitter": 100,
        "Satisfying Vial": 1
    },
    "Tide Popper": {
        "Blue Extract": 1500,
        "Stinger": 150,
        "Tropical Drink": 150,
        "Swirled Wax": 75,
        "Super Smoothie": 50
    },
    "Dark Scythe": {
        "Red Extract": 1500,
        "Stinger": 150,
        "Hard Wax": 100,
        "Caustic Wax": 50,
        "Super Smoothie": 50,
        "Invigorating Vial": 3,
        "Honey": 2500000000000
    },
    "Gummyballer": {
        "Glue": 1500,
        "Gumdrops": 2000,
        "Caustic Wax": 50,
        "Super Smoothie": 50,
        "Satisfying Vial": 3,
        "Turpentine": 5,
        "Honey": 10000000000000
    },
    "Petal Wand": {
        "Spirit Petal": 1,
        "Star Jelly": 10,
        "Glitter": 25,
        "Enzymes": 75,
        "Honey": 1500000000
    }
}

const blenderRecipes = {
    "Blue Extract": {"Blueberry": 50, "Royal Jelly": 10},
    "Red Extract": {"Strawberry": 50, "Royal Jelly": 10},
    "Enzymes": {"Pineapple": 50, "Royal Jelly": 10},
    "Oil": {"Sunflower Seed": 50, "Royal Jelly": 10},
    "Glue": {"Gumdrops": 50, "Royal Jelly": 10},
    "Tropical Drink": {"Coconut": 10, "Enzymes": 2, "Oil": 2},
    "Gumdrops": {"Pineapple": 3, "Strawberry": 3, "Blueberry": 3},
    "Moon Charm": {"Royal Jelly": 1, "Pineapple": 5, "Gumdrops": 5},
    "Glitter": {"Moon Charm": 25, "Magic Bean": 1},
    "Star Jelly": {"Royal Jelly": 100, "Glitter": 3},
    "Purple Potion": {"Neonberry": 3, "Red Extract": 3, "Blue Extract": 3, "Glue": 3},
    "Soft Wax": {"Honeysuckle": 5, "Oil": 1, "Enzymes": 1, "Royal Jelly": 10},
    "Hard Wax": {"Soft Wax": 3, "Enzymes": 3, "Bitterberry": 33, "Royal Jelly": 33},
    "Swirled Wax": {"Hard Wax": 3, "Soft Wax": 9, "Purple Potion": 6, "Royal Jelly": 3333},
    "Caustic Wax": {"Hard Wax": 5, "Enzymes": 5, "Neonberry": 25, "Royal Jelly": 5252},
    "Field Dice": {"Soft Wax": 1, "Whirligig": 1, "Red Extract": 1, "Blue Extract": 1},
    "Smooth Dice": {"Field Dice": 3, "Soft Wax": 3, "Whirligig": 3, "Oil": 3},
    "Loaded Dice": {"Smooth Dice": 3, "Hard Wax": 3, "Oil": 3, "Glue": 1},
    "Super Smoothie": {"Neonberry": 3, "Star Jelly": 3, "Purple Potion": 3, "Tropical Drink": 6},
    "Turpentine": {"Super Smoothie": 10, "Caustic Wax": 10, "Star Jelly": 100, "Honeysuckle": 1000}
};

// Extract base ingredients
function extractBaseIngredients(...recipeDicts) {
    const ingredients = new Set();
    recipeDicts.forEach(recipeDict => {
        Object.values(recipeDict).forEach(items => {
            Object.keys(items).forEach(item => ingredients.add(item));
        });
    });
    return Array.from(ingredients).sort();
}

const baseIngredients = extractBaseIngredients(recipes, blenderRecipes);

// Initialize the calculator
document.addEventListener("DOMContentLoaded", () => {
    const inventoryContent = document.getElementById("inventory-content");
    const itemSelect = document.getElementById("item-select");
    const treeView = document.getElementById("treeview");
    const craftingStepsText = document.getElementById("crafting-steps");

    const ingredients = {};

    // Populate inventory fields
    baseIngredients.forEach((ingredient, i) => {
        const label = document.createElement("label");
        label.textContent = ingredient;

        const input = document.createElement("input");
        input.type = "number";
        input.id = `ingredient-${ingredient}`;
        input.value = 0;
        ingredients[ingredient] = input;

        const div = document.createElement("div");
        div.appendChild(label);
        div.appendChild(input);
        inventoryContent.appendChild(div);
    });

    // Populate the dropdown
    Object.keys(recipes).forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        itemSelect.appendChild(option);
    });

function calculateRequirements() {
    const selectedItem = document.getElementById("endgame-item").value;
    const requiredItems = recipes[selectedItem] || {};
    let missingItems = {}; // To store missing items
    let craftingSteps = []; // To store crafting steps

    // Get inventory amounts from input fields
    const inventory = {};
    document.querySelectorAll(".ingredient-input").forEach(input => {
        const ingredient = input.id;
        const amount = parseInt(input.value) || 0;
        inventory[ingredient] = amount;
    });

    // Recursive function to calculate required quantities
    function getRequiredQuantity(item, quantityNeeded, level = 1) {
        const availableInventory = inventory[item] || 0;
        let remainingQuantity = Math.max(0, quantityNeeded - availableInventory); // Calculate remaining quantity

        let indent = "  ".repeat(level);
        if (remainingQuantity > 0) {
            // Add a crafting step
            craftingSteps.push(`${indent}Step ${level}: Craft ${remainingQuantity} of ${item} (needed ${quantityNeeded}, have ${availableInventory})`);

            // If this item has sub-recipes, recursively calculate their requirements
            if (recipes[item]) {
                for (let subItem in recipes[item]) {
                    let subQuantity = recipes[item][subItem] * remainingQuantity;
                    getRequiredQuantity(subItem, subQuantity, level + 1);
                }
            } else if (blenderRecipes[item]) {
                // Check for blender recipes
                for (let subItem in blenderRecipes[item]) {
                    let subQuantity = blenderRecipes[item][subItem] * remainingQuantity;
                    getRequiredQuantity(subItem, subQuantity, level + 1);
                }
            } else {
                // If it's a base material, add it to the missing items
                missingItems[item] = (missingItems[item] || 0) + remainingQuantity;
                craftingSteps.push(`${indent}  → Base material: ${remainingQuantity} of ${item}`);
            }
        } else {
            craftingSteps.push(`${indent}Step ${level}: No need to craft ${item} (needed ${quantityNeeded}, have ${availableInventory})`);
        }
    }

    // Start calculating from the selected item
    for (let item in requiredItems) {
        let quantity = requiredItems[item];
        getRequiredQuantity(item, quantity);
    }

    // Display results
    displayResults(missingItems, craftingSteps);
}

// Function to display results in the TreeView and crafting steps area
function displayResults(missingItems, craftingSteps) {
    // Clear the existing tree and steps
    const treeView = document.getElementById("crafting-tree");
    const craftingStepsText = document.getElementById("crafting-steps");
    treeView.innerHTML = "";
    craftingStepsText.value = "";

    // Function to build tree structure in HTML
    function addTreeItem(parentNode, itemName, quantity) {
        if (quantity > 0) {
            let listItem = document.createElement("li");
            listItem.textContent = `${itemName}: ${quantity}`;
            parentNode.appendChild(listItem);

            if (recipes[itemName]) {
                let subList = document.createElement("ul");
                listItem.appendChild(subList);
                for (let subItem in recipes[itemName]) {
                    let subQuantity = recipes[itemName][subItem] * quantity;
                    addTreeItem(subList, subItem, missingItems[subItem] || 0);
                }
            } else if (blenderRecipes[itemName]) {
                let subList = document.createElement("ul");
                listItem.appendChild(subList);
                for (let subItem in blenderRecipes[itemName]) {
                    let subQuantity = blenderRecipes[itemName][subItem] * quantity;
                    addTreeItem(subList, subItem, missingItems[subItem] || 0);
                }
            }
        }
    }

    // Add items to tree view
    for (let item in missingItems) {
        addTreeItem(treeView, item, missingItems[item]);
    }

    // Display crafting steps in the textarea
    craftingStepsText.value = craftingSteps.join("\n");
}

// Add event listeners
document.getElementById("calculate-btn").addEventListener("click", calculateRequirements);

    // Save and load inventory functionality
    document.getElementById("save-btn").addEventListener("click", () => {
        const inventory = {};
        Object.keys(ingredients).forEach(ingredient => {
            inventory[ingredient] = parseInt(ingredients[ingredient].value) || 0;
        });
        const json = JSON.stringify(inventory);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "inventory.json";
        a.click();
    });

    document.getElementById("load-btn").addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.addEventListener("change", (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const inventory = JSON.parse(e.target.result);
                Object.keys(inventory).forEach(ingredient => {
                    if (ingredients[ingredient]) {
                        ingredients[ingredient].value = inventory[ingredient];
                    }
                });
            };
            reader.readAsText(file);
        });
        input.click();
    });

    // Clipboard loading (requires user permission)
    document.getElementById("clipboard-btn").addEventListener("click", async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            const inventory = JSON.parse(clipboardText);
            Object.keys(inventory).forEach(ingredient => {
                if (ingredients[ingredient]) {
                    ingredients[ingredient].value = inventory[ingredient];
                }
            });
        } catch (e) {
            alert("Failed to load from clipboard.");
        }
    });
});
