import axios from 'axios'
import React, { createContext, useState} from 'react'


export const DataContext = createContext()


export const DataProvider = props => {

  const [wordcloud, setWordcloud] = useState("")
  const [edges, setEdges] = useState([])
  const [nodes, setNodes] = useState([])
  const [data_emotions, setData_emotions] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [getData, setGetData] = useState(true);

  const [data, setData] = useState({})


  const fetchData = async (input) => {
    window.localStorage.removeItem('data')
    await axios({
      method: 'post',
      url: 'http://pantaudata.web.id/scrape.json',
      data: input,
    })
      .then((res) => {
        let result = res.data
        window.localStorage.setItem('data', JSON.stringify(result))
      })
      .catch((err) => {
        console.log(err)
      })
    // await axios({
    //     method: 'GET',
    //     url: 'http://pantaudata.web.id/scrape.json',
    //   })
    //     .then((response) => {
    //       const res = response.data
    //       console.log('SUCCESS')
    //       console.log(res)
    


    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         console.log('ERROR')
    //         console.log(error.response)
    //         console.log(error.response.status)
    //         console.log(error.response.headers)
    //       }
    //     })

    // try {
    //     console.log('try')
    //     let res = await axios.get(`http://pantaudata.web.id/scrape.json`)
    //     let result = res.data
        
        // setGetData(true)
        
    //     setData(result)
        
        
    //     // setWordcloud(result.hashtag_wordcloud)
    //     // setEdges(result.sna.edges)
    //     // setNodes(result.sna.nodes)
    //     // setData_emotions(result.emotions)
        
        
    //     setFetchStatus(false)
    //     console.log("success")

        
    // } catch (error) {
    //     console.log(error)
    // }
    }



    let functions = {
        fetchData,
    }

    return (
        <DataContext.Provider value={{
                // wordcloud,
                // edges,
                // nodes,
                // data_emotions,
                // setEdges,
                // setNodes,
                // setWordcloud,
                // setData_emotions,
                // fetchStatus,
                // setFetchStatus,
                getData,
                setGetData,
                data,
                setData,
                functions
            }}>
            {props.children}
        </DataContext.Provider>
    )


}