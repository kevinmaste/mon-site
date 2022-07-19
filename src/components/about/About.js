import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Kevin{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I'm a junior software engineer focusing on Front-End web and emerging
              tech such, i'm searching an alternance for my last years.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              You can find me working with JavaScript, React,Node.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'exercising',
                    'trying new things',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              Since 2 years ago - I've spent my time seeking and learning new
              technologies.This led me to work on various projects with the aim of personal improvement.{' '}
            </p>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
