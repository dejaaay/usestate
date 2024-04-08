import './main.css';
import './corner.css';
function form() {
    return (
        <div id="form">
        <form>
            <select>
                {Array.from({ length: 42})}
            </select>
            <input class="todo-input" type="text" placeholder="Add a task." />
            <button class="todo-btn" type="submit">I Got This!</button>
        </form>
    </div>
    )
}

export default form
