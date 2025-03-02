let expenses = [];

function addExpense() {
  let desc = prompt("Enter Expense Description:");
  let amount = parseFloat(prompt("Enter Expense Amount:"));
  if (desc !== "" && !isNaN(amount) && amount > 0) {
    expenses.push({ desc, amount });
    console.log("Expense Added Successfully!");
  } else {
    console.log("OOPS! Invalid input. Please try again.");
  }
}

function viewExpenses() {
  if (expenses.length === 0) {
    console.log("As of now, there is No Expenses to view bro!");
  } else {
    console.log("\nExpense List:");
    if (expenses.length === 0) {
      console.log("No expenses are added bro!");
    } else {
      expenses.forEach((expense, index) => {
        console.log(`${index + 1}. ${expense.desc}: Rs.${expense.amount}`);
      });
    }
  }
}

function editExpense() {
  if (expenses.length > 0) {
    let index = parseInt(prompt("Enter expense number to edit:")) - 1;
    if (index >= 0 && index < expenses.length) {
      let newDesc = prompt("Enter New Description:"); 
      let newAmount = parseFloat(prompt("Enter New Amount:"));
      if (newDesc && !isNaN(newAmount)) {
        expenses[index] = { desc: newDesc, amount: newAmount };
        console.log("Expense Updated Successfully!");
      } else {
        console.log("OOPS! Invalid input. Try again.");
      }
    } else {
      console.log("OOPS! Invalid Expense Number.");
    }
  } else {
    console.log("OOPS! There are No Expenses to edit bro!");
  }
}

function deleteExpense() {
  if (expenses.length > 0) {
    let index = parseInt(prompt("Enter expense number to delete:")) - 1;
    if (index >= 0 && index < expenses.length) {
      expenses.splice(index, 1);
      console.log("Expense deleted successfully!");
    } else {
      console.log("OOPS! Invalid expense number.");
    }
  } else {
    console.log("OOPS! There are No Expenses to delete bro!");
  }
}

function calculateTotal() {
  let total = 0;
  expenses.forEach((expense) => {
    total += expense.amount;
  });
  console.log(`\nTotal Expenses: Rs.${total}`);
}

function ExpenseTracker() {
  let running = true;
  console.log("\t\t\t\t\tExpense Tracker");
  console.log("\t\t\t\t\t---------------");
  while (running) {
    console.log("\nChoose an option:");
    console.log("1. Add Expense");
    console.log("2. View Expenses");
    console.log("3. Edit Expense");
    console.log("4. Delete Expense");
    console.log("5. Calculate Total");
    console.log("6. Exit");

    let choice = parseInt(prompt("Enter your choice:"));

    switch (choice) {
      case 1:
        addExpense();
        break;
      case 2:
        viewExpenses();
        break;
      case 3:
        editExpense();
        break;
      case 4:
        deleteExpense();
        break;
      case 5:
        calculateTotal();
        break;
      case 6:
        console.log("Thankyou!");
        running = false; // Exit loop
        break;
      default:
        console.log("OOPS! Invalid choice. Please try again.");
    }
  }
}

ExpenseTracker();
