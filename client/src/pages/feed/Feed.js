import axios from 'axios' 
import React, {useState, useEffect} from 'react'; 
import styles from './css.module.css'

export default function Feed() {

    const [data, setData] = useState([
        {'id': 0, 'title': '', 'score': 0, "role1": '', "role2": '', "role3": ''}
    ]);

    // Get all of user's information here (async func)
    // useEffect(() => {
    //     axios.get('/get').then(res => setData(res.data.data))
    // }, [])

    // Search for data with user's choice (only choose 1 option)
    const search = () => {
        const searchValue = document.getElementById('search-bar').value;
        const filterValue = document.getElementById('filter').value

        // If user choose field that need to be integer for handling then covert it
        if(filterValue == 'id' || filterValue == 'score')
            searchValue = parseInt(searchValue)

        const transfer_data = {filterValue: searchValue}
        axios.post('/search', transfer_data).then(res => setData(res.data.data))

    }
    
    const add = () => {
        window.location.href = '/add'
    }
    
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.add}>
                    <div class="search-container" value='none'>
                        <select id="filter">
                            <option value="name">Name</option>
                            <option value="id">ID</option>
                            <option value='none' selected>None</option>
                        </select>
                        <input type="text" id="search-bar" placeholder="Search"/>
                        <div className={styles.btnGrp}>
                            <button class="search-button" onClick={search}>Search</button>
                            <button className={styles.btn} onClick={add}>Add</button>
                        </div>
                    </div>
                    </div>
                    
                    <div className={styles.table}>
                    <table>
                        <thead>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                            <th>Header 3</th>
                        </tr>
                        {
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            ))
                        }
                        </thead>
                        <tbody>
                        {/* Table rows */}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    )
}