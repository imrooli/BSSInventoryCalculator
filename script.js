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

// Function to extract base ingredients from recipes
function extractBaseIngredients(...recipeDicts) {
    const ingredients = new Set();
    recipeDicts.forEach(recipeDict => {
        Object.values(recipeDict).forEach(items => {
            Object.keys(items).forEach(item => ingredients.add(item));
        });
    });
    return Array.from(ingredients).sort();
}

// Get the base ingredients
const baseIngredients = extractBaseIngredients(recipes, blenderRecipes);

// Function to calculate requirements
function calculateRequirements(selectedItem, inventory) {
    const requiredItems = recipes[selectedItem] || {};
    const missingItems = {};
    const craftingSteps = [];

    function getRequiredQuantity(item, quantityNeeded, level = 1) {
        const availableInventory = inventory[item] || 0;
        const remainingQuantity = Math.max(0, quantityNeeded - availableInventory);

        const indent = "  ".repeat(level);
        if (remainingQuantity > 0) {
            craftingSteps.push(`${indent}Step ${level}: Craft ${remainingQuantity} of ${item} (needed ${quantityNeeded}, have ${availableInventory})`);

            if (recipes[item]) {
                Object.entries(recipes[item]).forEach(([subItem, subQuantity]) => {
                    const totalRequired = subQuantity * remainingQuantity;
                    getRequiredQuantity(subItem, totalRequired, level + 1);
                });
            } else {
                missingItems[item] = (missingItems[item] || 0) + remainingQuantity;
                craftingSteps.push(`${indent}  → Base material: ${remainingQuantity} of ${item} (needed ${quantityNeeded}, have ${availableInventory})`);
            }
        } else {
            craftingSteps.push(`${indent}Step ${level}: ${item} (needed ${quantityNeeded}, have ${availableInventory})`);
            craftingSteps.push(`${indent}  → Inventory has sufficient ${item} (${availableInventory} available)`);
        }
    }

    Object.entries(requiredItems).forEach(([item, quantity]) => {
        getRequiredQuantity(item, quantity);
    });

    Object.keys(missingItems).forEach(item => {
        missingItems[item] = Math.max(0, missingItems[item] - (inventory[item] || 0));
    });

    return { missingItems, craftingSteps };
}

function displayResults(missingItems, craftingSteps) {
    const resultsTree = document.getElementById('resultsTree');
    const craftingStepsTextArea = document.getElementById('craftingSteps');

    // Clear previous results
    resultsTree.innerHTML = '';
    craftingStepsTextArea.value = '';

    // Display missing items
    for (const [item, quantity] of Object.entries(missingItems)) {
        if (quantity > 0) {
            const resultItem = document.createElement('div');
            resultItem.textContent = `${item}: ${quantity}`;
            resultsTree.appendChild(resultItem);
        }
    }

    // Display crafting steps
    craftingStepsTextArea.value = craftingSteps.join('\n');
}


// Populate inventory fields dynamically
function populateInventoryFields() {
    const inventoryFieldsDiv = document.getElementById('inventoryFields');
    baseIngredients.forEach(ingredient => {
        const label = document.createElement('label');
        label.textContent = ingredient;
        label.htmlFor = ingredient;
        const input = document.createElement('input');
        input.type = 'number';
        input.id = ingredient;
        input.name = ingredient;
        inventoryFieldsDiv.appendChild(label);
        inventoryFieldsDiv.appendChild(input);
        inventoryFieldsDiv.appendChild(document.createElement('br'));
    });
}

// Populate endgame items dropdown
function populateEndgameItems() {
    const endgameItemSelect = document.getElementById('endgameItem');
    Object.keys(recipes).forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        endgameItemSelect.appendChild(option);
    });
}

// Save inventory data as a JSON file
function saveInventory() {
    const inventory = {};
    baseIngredients.forEach(ingredient => {
        inventory[ingredient] = parseInt(document.getElementById(ingredient).value) || 0;
    });
    
    const dataStr = JSON.stringify(inventory, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Handle file upload and parse JSON
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                baseIngredients.forEach(ingredient => {
                    document.getElementById(ingredient).value = data[ingredient] || 0;
                });
            } catch (err) {
                alert('Failed to parse JSON file');
            }
        };
        reader.readAsText(file);
    } else {
        alert('Please upload a valid JSON file');
    }
}

// Load JSON data from the clipboard
async function loadFromClipboard() {
    try {
        const clipboardData = await navigator.clipboard.readText();
        const data = JSON.parse(clipboardData);

        baseIngredients.forEach(ingredient => {
            document.getElementById(ingredient).value = data[ingredient] || 0;
        });
    } catch (err) {
        alert('Failed to load JSON data from clipboard');
    }
}



// Initialize event listeners and populate inventory fields
document.addEventListener('DOMContentLoaded', () => {
    const endgameItemSelect = document.getElementById('endgameItem');
    const calculateButton = document.getElementById('calculateButton');
    const resultsTree = document.getElementById('resultsTree');
    const craftingStepsTextArea = document.getElementById('craftingSteps');
	

    // Attach event listeners
    document.getElementById('saveButton').addEventListener('click', saveInventory);
    document.getElementById('uploadFile').addEventListener('change', handleFileUpload);
    document.getElementById('loadClipboardButton').addEventListener('click', loadFromClipboard);
	document.getElementById('calculateButton').addEventListener('click', () => {
    const selectedItem = document.getElementById('endgameItem').value;
    const inventory = {};

    baseIngredients.forEach(ingredient => {
        inventory[ingredient] = parseInt(document.getElementById(ingredient).value) || 0;
    });

    const { missingItems, craftingSteps } = calculateRequirements(selectedItem, inventory);
    
    // Display results
    displayResults(missingItems, craftingSteps);
});

    // Populate inventory fields when the page loads
    populateInventoryFields();
	populateEndgameItems();
});

