import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";



function Post() {
    const params = useParams();
    const id= params;
    const fetchuser = async () => {


        try {
            const data = axios.get(`https://dummy.restapiexample.com/api/v1/employee/1`)
            return data;
        } catch (error) {
            return 'error is occurs'
        }
    }
    console.log('thisis the value of the use params', params)
    const { data, isLoading, isError } = useQuery('userdetails', fetchuser);
    console.log(data, 'this is the user data')
    return (<>
        <h1>this is the value of the heading</h1>

    </>)
}

export default Post