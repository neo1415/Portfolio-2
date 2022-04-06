import React from 'react'
import Title from './../Components/Title';
import ImageSection from '../Components/imageSection';
import SkillSection from '../Components/SkillSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';


function About() {
  return (
    <div className='AboutPage'>
        <Title title={'About me'} span={'About me'} />
        <ImageSection />
        <Title title={'My Skills'} span={'My Skills'} />
        <div className='skills-container'>
        <SkillSection  skill={'HTML & CSS'} progress={'95%'} width={'95%'} />
        <SkillSection  skill={'JavaScript'} progress={'75%'} width={'75%'} />
        <SkillSection  skill={'React'} progress={'70%'} width={'70%'} />
        <SkillSection  skill={'Python'} progress={'40%'} width={'40%'} />
        <SkillSection  skill={'Wordpress'} progress={'80%'} width={'80%'} />
        <SkillSection  skill={'Graphics Design'} progress={'70%'} width={'70%'} />
        <SkillSection  skill={'Copywriting'} progress={'80%'} width={'80%'} />
        <SkillSection  skill={'UI/UX'} progress={'60%'} width={'60%'} />
        </div>
        <Title title={'My Services'} span={'My Services'} />
        <div className='services-container'>
          <ServicesSection image={design} title={'Web Design'} text = {"I'll build, develop and maintain your professional projects from start to finish to ensure your satisfaction"}  />
          <ServicesSection image={gamedev} title={'Game Development'} text = {"I'll build, develop and maintain your professional projects from start to finish to ensure your satisfaction"} />
          <ServicesSection image={intelligence} title={'Artificial Intelligence'} text = {"I'll build, develop and maintain your professional projects from start to finish to ensure your satisfaction"} />
        </div>
    </div>
  )
}

export default About