import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels:['Bicester','Kildare','La Vallee','Ingolstadt',
                'La Roca', 'Las Rozas'],

                datasets:[
                {
                    // label:['Registrations'],
                    data:[
                        5600,
                        2000,
                        4500,
                        500,
                        1200,
                        2600
                    ],

                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(153,102,64,0.6)',
                        'rgba(255,159,132,0.6)'

                    ]
                } 

                ]
            }
        }
    }


    render(){
        return(
            <div className = "chart">
                <Bar
                    data = {this.state.chartData }
                    // width = {100}
                    // height = {50}
                    options = {{

                        title:{
                            display:true,
                            text:'Registrations across Villages for Today',
                            fontsize:25
                        },
                        legend:{
                            display:false,
                            // position:'right',
                            
                        }
                    }}

                />
            </div>

        )
    }
}


export default Chart;