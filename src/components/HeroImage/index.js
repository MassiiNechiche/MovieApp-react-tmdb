import React from 'react';

// Styles
import { Wrapper, Content, Text } from './HeroImage.style';

var date = new Date();

const HeroImage = ({ image, title, text, rating, year }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
               
                <span>{title}  <sup>({date.getFullYear(year)})</sup>  </span>
                <p>{text}</p>
                 <h2><i className="fas fa-fire"></i> {rating} <sup>/ 10</sup> </h2>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;