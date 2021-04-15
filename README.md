# ReactComponents
Collection of react components

1. Donut
- A simple donut chart. Can handle up to 10 elements. Accepts the following props:  

  - percent1, percent2, ..., percent9 (1-9 Props). These define what portion of the chart each element takes up. The percentage of the 10th (or last if using less than 10) is just the remainder.
  - color1, color2,...color10 (1-10 Props). These are colors (as hex codes) that define the color for each element.
  - size (1 Prop). Needs to be a string. Can be vw,vh,%, px, rem, em. This will be the size of the donut portion. Left and right legends add 10vw on their respective sides. 
  - Title (1 Prop). Needs to be a string. Text displayed centered over the chart.
  - Lables (1 Prop). Needs to be a list of strings. These will be the labels of each element shown on the legend.
  - legend (1 Prop). Needs to be a string. Can be 'top', 'right', 'bottom', or 'left'.
  
  
  Example 1.
  
        <Donut
        percent1 ={20}
        percent2 ={5}
        percent3 ={5}
        percent4 ={5}
        percent5 ={5}
        percent6 ={5}
        percent7 ={5}
        percent8 ={5}
        percent9 ={5}
        
        color1 = {'#75ba88'}
        color2 = {'#6b94b3'}
        color3 = {'#d6c967'}
        color4 = {'#e07767'}
        color5 = {'#9dcae0'}
        color6 = {'#978dc7'}
        color7 = {'#bd4a4a'}
        color8 = {'#c99d79'}
        color9 = {'#b8d494'}
        color10 = {'#e6aadc'}

        size = {'20rem'}

        title = {'My New Donut Chart}
        labels ={['Idea 1','idea 2', 'idea 3', 'idea 4', ' idea 5', ' idea 6', 'idea 7', 'idea 8', 'idea 9','idea 10']}

        legend = {'bottom'}
        />
        
 Example 2.
        
        <Donut
        percent1 ={25}
        percent2 ={15}
        percent3 ={34}

        color1 = {'#75ba88'}
        color2 = {'#6b94b3'}
        color3 = {'#d6c967'}

        size = {'30vw'}

        title = {'My New Donut Chart}
        labels ={['Idea 1','idea 2', 'idea 3']}
        
        legend = {'right'}
        />
