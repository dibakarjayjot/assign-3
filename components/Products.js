import React ,{ Component} from 'react';
import { Table } from 'semantic-ui-react';
class Products extends Component{
    constructor(props){
        super(props);
        this.state={data:[]};
    }

    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('user'));
        this.setState({data});
        console.log(this.state.date);
    }
    render(){
        return(
        <div style={{marginLeft:'30%', marginRight:'10%'}}>
            {this.state.data?
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Product Code</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Start Date</Table.HeaderCell>
                        <Table.HeaderCell>End Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {this.state.data.map(da => (
                     <Table.Body key={da.id}>
                        <Table.Row>
                <Table.Cell>{da.productName}</Table.Cell>
                <Table.Cell>{da.productCode}</Table.Cell>
                <Table.Cell>{da.quantity}</Table.Cell>    
                <Table.Cell>{da.startDate}</Table.Cell>
                <Table.Cell>{da.endDate}</Table.Cell>

                    </Table.Row>
                    </Table.Body> 
                ))}
            </Table>:null}
            



        </div>
        );
    }
}
export default Products;