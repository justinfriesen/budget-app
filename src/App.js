import { Container, Stack, Button } from "react-bootstrap"
import BudgetCard  from "./components/BudgetCard"
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react"

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  return (

  <>
    <Container className="my-4"> {/* Gives spacing on top and bottom of page */}
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto"> Budgets</h1> {/* Margin on edge of budgets will eb auto */}
        <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}> Add Budget </Button>
        <Button variant="outline-primary"> Add Expense </Button>
      </Stack>
      <div style={{
        display:"grid", 
        gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
        gap:"1rem", 
        alignItems:"flex-start"}}> 
        <BudgetCard name="Entertainment" gray amount={100} max={1000}>

        </BudgetCard>
        {/* Gap between items */}
        {/* Margin on edge of budgets will eb auto */}
        {/* Min size of all cards = 300px, takes up 1fr max space*/}
        {/* Margin on edge of budgets will eb auto */}

      </div>

    </Container>
    <AddBudgetModal show={showAddBudgetModal} handleClose={() =>
    setShowAddBudgetModal(false)}/>
  </>
  )

}

export default App;
