import Link from 'next/link'
import Layout from '../components/Layout'
import Module from '../components/Module'
import { GITHUB_URL, LINKDIN_URL } from '../constants/url'

const About = () => (
  <Layout title="About">
    <Module>
      <h1>About</h1>
      <p>Hi, my name is Johnson. I&apos;m a software developer.</p>
      <p>
        For my works, please visit my <a href={LINKDIN_URL}>LinkedIn</a> or{' '}
        <a href={GITHUB_URL}>Github</a>.
      </p>
    </Module>
  </Layout>
)

export default About
