import React, {Component} from "react"
import { Card, Col, Row} from 'antd';
import axios from "axios"

const { Meta } = Card;

class MovieList extends Component {
  constructor(props){
    super(props)
    this.state ={
      movie:[]
    }
  }

  componentDidMount(){
    axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
    .then(res => {
      let movie = res.data.map(el=>{ return {
         description : el.description,
         duration : el.duration,
         genre : el.genre,
         image_url : el.image_url,
         rating : el.rating,
         review : el.review,
         title : el.title,
         year : el.year
      }}) 
      this.setState({movie})
    })
  }

  render(){
    return(
      <div className="card" >
        <Row gutter={[8, 8]}>
          {
            this.state.movie.map((item)=>{
              return(
                <Col span={5}>
                  <Card
                    hoverable
                    style={{ maxWidth:300,maxHeight:500, borderRadius:15}}
                    cover={<img alt="example" src={item.image_url} style={{borderTopRightRadius:15, borderTopLeftRadius:15, width:242,maxHeight:400}}/>}
                  >
                    <Meta title={item.title} description={item.genre} />
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
      
    )
  }
}

export default MovieList