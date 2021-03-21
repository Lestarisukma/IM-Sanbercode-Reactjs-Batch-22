import React, {Component} from "react"
import { Card, Col, Row} from 'antd';
import axios from "axios"
import Layout from "antd/lib/layout/layout";

const { Meta } = Card;

class GameList extends Component {
  constructor(props){
    super(props)
    this.state ={
      game:[]
    }
  }

  componentDidMount(){
    axios.get(`https://backendexample.sanbersy.com/api/data-game`)
    .then(res => {
      let game = res.data.map(el=>{ return {
         genre : el.genre,
         image_url : el.image_url,
         singlePlayer : el.singlePlayer,
         multiPlayer : el.multiPlayer,
         name : el.name,
         platform : el.platform,
         release : el.release
      }}) 
      this.setState({game})
    })
  }

  render(){
    return(
      <Layout style={{ padding: '0 24px 24px' }}>
        <div className="card">
          <Row gutter={[8, 8]}>
            {
              this.state.game.map((item)=>{
                return(
                  <Col span={5}>
                    <Card
                      hoverable
                      style={{ maxwidth:300, borderRadius:15}}
                      cover={<img alt="example" src={item.image_url} style={{borderTopRightRadius:15, borderTopLeftRadius:15, width:233,maxHeight:400}}/>}
                    >
                      <Meta title={item.name} description={item.genre} />
                    </Card>
                  </Col>

                )
              })
            }
            
          </Row>
        </div>
      </Layout>
      
    )
  }
}

export default GameList