
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import './covidData.css'
// import {} from useQuery
import axios from 'axios';

function CovidData() {
    const [isLoading, setIsloading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5)
    useEffect(() => {
        setIsloading(true)
        axios.get('http://localhost:5000/data').then(async (data) => {
            setData([data.data]);
        }).catch((err) => {
            console.log(err)
        })
        setIsloading(false)
    }, [])


const indexOflastPost= currentPage*postPerPage;
const indexOfFirstPost= indexOflastPost-postPerPage;
const currentPost=data.slice(indexOfFirstPost,indexOflastPost);
console.log(currentPost,'this is the current post')


    return (<>
        <div className='mainPage'>
            <div className='secondmainpage'><h1 className='headingTop'>covid data of india</h1>
                <div className='tablediv'>
                    <table className='table'>
                        <thead className='tablehead'>
                            <td>Date</td>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deceased</td>
                            <td>Other</td>
                            <td>Tested</td>
                        </thead>
                        {
                            currentPost.map((element) => {
                                return (
                                    element.map((data) => {
                                        console.log(data, 'this is the data')
                                        return (<tr>
                                            <td>{data.Date}</td>
                                            <td>{data.State}</td>
                                            <td>{data.Confirmed}</td>
                                            <td>{data.Recovered}</td>
                                            <td>{data.Deceased}</td>
                                            <td>{data.Other}</td>
                                            <td>{data.Tested}</td>
                                        </tr>)


                                    })
                                )


                            })
                        }





                    </table>
                </div>

            </div>
        </div>



    </>)
}

export default CovidData;