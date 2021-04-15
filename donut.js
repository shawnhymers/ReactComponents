import { Container, Row, Col, Button} from 'react-bootstrap';


const HorizontalLegend = ({width, labels,color1,color2,color3,color4,color5,color6,color7,color8,color9,color10})=>{

  return(
    <>
    <div style ={{overflowX:'scroll',width:width}}>
    <Row className = 'flex-nowrap vertical-centered-children '>
      <Col >

          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color1}/>
          </svg>

      </Col>
      <Col md="auto" >

          {labels[0]}

      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color2}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[1]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color3}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[2]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color4}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[3]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color5}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[4]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color6}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[5]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color7}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[6]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color8}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[7]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color9}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[8]}
      </Col>

      <Col>
        <svg width="30" height="30" viewBox="0 0 50 50">
          <rect x="15" y="15" width="30" height="30"
                fill = {color10}/>
        </svg>
      </Col>
      <Col md="auto">
        {labels[9]}
      </Col>

    </Row>
    </div>
    </>
  )
}

const VerticalLegend = ({height,labels, color1,color2,color3,color4,color5,color6,color7,color8,color9,color10, elementCount})=>{

  return(
    <>
    <div style ={{overflowY:'scroll', overflowX:'scroll',height:height,width:'10vw'}}>



      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto" style = {{width:'3vw'}}>
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30" fill = {color1}/>
          </svg>
        </Col>
        <Col md="auto" style = {{width:'7vw'}}>
          {labels[0]}
        </Col>
      </Row>


{elementCount>1?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30" fill = {color2}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[1]}
        </Col>
      </Row>
      :null
  }

{elementCount>2?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color3}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[2]}
        </Col>
      </Row>
      :null
  }

{elementCount>3?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color4}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[3]}
        </Col>
      </Row>
      :null
  }

{elementCount>4?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color5}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[4]}
        </Col>
      </Row>
      :null
  }

{elementCount>5?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color6}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[5]}
        </Col>
      </Row>
      :null
  }

{elementCount>6?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color7}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[6]}
        </Col>
      </Row>
      :null
  }

{elementCount>7?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color8}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[7]}
        </Col>
      </Row>
      :null
  }
{elementCount>8?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30"
                  fill = {color9}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[8]}
        </Col>
      </Row>
      :null
  }
{elementCount>9?
      <Row style = {{width:'10vw'}} className = "vertical-centered-children">
        <Col md="auto">
          <svg width="30" height="30" viewBox="0 0 50 50">
            <rect x="15" y="15" width="30" height="30" fill = {color10}/>
          </svg>
        </Col>
        <Col md="auto">
          {labels[9]}
        </Col>
      </Row>
:null}



    </div>
    </>
  )
}

const Donut = ({percent1, percent2, percent3, percent4, percent5,
                percent6, percent7, percent8, percent9,
                color1, color2, color3, color4, color5,
                color6, color7, color8, color9, color10,
                labels, title,size,legend
              })=>{

  const radius = 1;
  const perimeter = 6.283185307179686;

  var offset1 = perimeter;
  if (percent1>0) {
    offset1 = (perimeter*(percent1 )/100)*-1;
  }

  var offset2 = perimeter;
  if (percent2>0) {
    offset2 = (perimeter*(percent1 + percent2)/100)*-1;
  }

  var offset3 = perimeter;
  if (percent3>0) {
    offset3 = (perimeter*(percent1 + percent2 + percent3)/100)*-1;
  }

  var offset4 = perimeter;
  if (percent4>0) {
    offset4 = (perimeter*(percent1 + percent2 + percent3 + percent4 )/100)*-1;
  }

  var offset5 = perimeter;
  if (percent5>0) {
    offset5 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 )/100)*-1;
  }

  var offset6 = perimeter;
  if (percent6>0) {
    offset6 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 + percent6 )/100)*-1;
  }

  var offset7 = perimeter;
  if (percent7>0) {
    offset7 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 + percent6 + percent7 )/100)*-1;
  }

  var offset8 = perimeter;
  if (percent8>0) {
    offset8 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 + percent6 + percent7 + percent8 )/100)*-1;
  }

  var offset9 = perimeter;
  if (percent9>0) {
    offset9 = (perimeter*(percent1 + percent2 + percent3 + percent4 + percent5 + percent6 + percent7 + percent8 +percent9)/100)*-1;
  }

var elementCount = 1;

if(percent1 !=undefined)
{
  elementCount +=1;
}
if(percent2 !=undefined)
{
  elementCount +=1;
}
if(percent3 !=undefined)
{
  elementCount +=1;
}
if(percent4 !=undefined)
{
  elementCount +=1;
}
if(percent5 !=undefined)
{
  elementCount +=1;
}
if(percent6 !=undefined)
{
  elementCount +=1;
}
if(percent7 !=undefined)
{
  elementCount +=1;
}
if(percent8 !=undefined)
{
  elementCount +=1;
}
if(percent9 !=undefined)
{
  elementCount +=1;
}
console.log(elementCount);

var bottomLegend = false;
var topLegend = false;
var leftLegend = false;
var rightLegend = false;

  if (legend ==='bottom'){
    bottomLegend = true;
  }
  else if (legend === 'top') {
    topLegend = true;
  }
  else if (legend === 'left') {
    leftLegend = true;
  }
  else if (legend === 'right') {
    rightLegend = true;
  }

  return(
    <>
      {(legend ==='left' || legend ==='right')?
      <Row className = 'horizontal-centered-children' style = {{width:size,marginLeft:'10vw'}}>
        {title}
      </Row>
    :
    <Row className = 'horizontal-centered-children' style = {{width:size}}>
      {title}
    </Row>
  }


      {topLegend?
        <HorizontalLegend width = {size}
                          labels = {labels}
                          color1 = {color1}
                          color2 = {color2}
                          color3 = {color3}
                          color4 = {color4}
                          color5 = {color5}
                          color6 = {color6}
                          color7 = {color7}
                          color8 = {color8}
                          color9 = {color9}
                          color10 = {color10}
        />
      :null}

      <Row>
        {leftLegend ?
          <Col style = {{maxWidth:'10vw'}} >
            <VerticalLegend height = {size}
                            labels = {labels}
                            color1 = {color1}
                            color2 = {color2}
                            color3 = {color3}
                            color4 = {color4}
                            color5 = {color5}
                            color6 = {color6}
                            color7 = {color7}
                            color8 = {color8}
                            color9 = {color9}
                            color10 = {color10}
                            elementCount = {elementCount}
          />
          </Col>
        :null}
        <Col  style = {{maxWidth:size}}>
          <svg viewBox="0 0 3 3" transform="rotate(270)"  >
            <circle cx="1.5" cy="1.5" r={radius} fill="white" />
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color1} stroke-width="0.61" />
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color2} stroke-width="0.61" strokeDasharray={perimeter}  strokeDashoffset={offset1} />
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color3} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset2}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color4} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset3}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color5} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset4}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color6} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset5}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color7} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset6}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color8} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset7}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color9} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset8}/>
            <circle cx="1.5" cy="1.5" r={radius} fill="transparent" stroke={color10} stroke-width="0.61" strokeDasharray={perimeter} strokeDashoffset={offset9}/>
          </svg>
        </Col>
        {rightLegend ?
          <Col style = {{maxWidth:'10vw'}} >
            <VerticalLegend height = {size}
                            labels = {labels}
                            color1 = {color1}
                            color2 = {color2}
                            color3 = {color3}
                            color4 = {color4}
                            color5 = {color5}
                            color6 = {color6}
                            color7 = {color7}
                            color8 = {color8}
                            color9 = {color9}
                            color10 = {color10}
                            elementCount = {elementCount}
          />
          </Col>
        :null}


      </Row>
      {bottomLegend?
        <HorizontalLegend
        width = {size}
        labels = {labels}
        color1 = {color1}
        color2 = {color2}
        color3 = {color3}
        color4 = {color4}
        color5 = {color5}
        color6 = {color6}
        color7 = {color7}
        color8 = {color8}
        color9 = {color9}
        color10 = {color10}
        />
      :null}



    </>
  )
}
export default Donut
