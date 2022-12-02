/* eslint-disable react/prop-types */
import axios from 'axios'
import randomColor from 'randomcolor';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'

import Graph from "react-graph-vis";
import { DataContext } from 'src/Context/DataContext';


const SNA = () => {
    const data = JSON.parse(window.localStorage.getItem('data'))
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])
    const [empty , setEmpty] = useState(false)

    useEffect(() => {
        if(data.sna !== undefined){
            setNodes(data.sna.nodes)
            setEdges(data.sna.edges)
        }
        setEmpty(true)
    }, [])

    const editNodes = []
    const newNodes = []
    const newEdges = []

    for(var i = 0; i < nodes.length; i++){
        let temp = nodes[i]
        let same = false
        for(var j = 0; j < editNodes.length; j++){
            if(temp.id === editNodes[j].id){
                same = true
                break
            }
            else{
                same = false
            }
        }
        if(same === false){
            editNodes.push(temp)
        }
    }


    for(var i = 0; i < editNodes.length; i++){
        var color = randomColor()
        newNodes.push({id: i+1, label: editNodes[i].id, color: color})
    }

    for(var i = 0; i < edges.length; i++){
        for(var j = 0; j < newNodes.length; j++){
            if(edges[i].from === newNodes[j].label){
                edges[i].from = newNodes[j].id
            }
        }

        for(var j = 0; j < newNodes.length; j++){
            if(edges[i].to === newNodes[j].label){
                edges[i].to = newNodes[j].id
            }
        }
        newEdges.push({from: edges[i].from, to: edges[i].to})

    }
 

    const graph = {
        nodes: newNodes,
        edges: newEdges,
    };




    const options = {
        layout: {
        hierarchical: true
        },
        edges: {
        color: "#000000"
        },
        height: "500px"
    };

    // const events = {
    //     select: function(event) {
    //     var { nodes, edges } = event;
    //     }
    // };

  return (
    <>
        {empty === true ? (
            <h3>SNA Tidak Ada</h3>
        ) : (
            <Graph
            graph={graph}
            options={options}
            // events={events}
        />
        )}
    </>
  )
}

export default SNA
