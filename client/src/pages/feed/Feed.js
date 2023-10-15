import axios from 'axios'; 
import React, {useState, useEffect} from 'react'; 
import styles from './css.module.css'

export default function Feed() {

    const [data, setData] = useState([]);

    useEffect(() => {
        let set_data = [{ id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 4, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },]

        setData(set_data)
    }, [])


    const search = () => {
        // api search node
    }
    
    const add = () => {
        // api add node
    }
    
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.add}>
                    <div class="search-container">
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