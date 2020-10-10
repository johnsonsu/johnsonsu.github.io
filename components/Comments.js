import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

const DISQUS_SCRIPT = 'disq_script'

const Comments = ({ fullUrl, id }) => {
  useEffect(() => {
    const sd = document.getElementById(DISQUS_SCRIPT)
    const disqus_config = () => {
      this.page.url = fullUrl
      this.page.identifier = id
    }
    if (!sd) {
      const d = document
      const s = d.createElement('script')
      s.src = 'https://johnsonsu.disqus.com/embed.js'
      s.id = DISQUS_SCRIPT
      s.async = true
      s.setAttribute('data-timestamp', +new Date())

      d.body.appendChild(s)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
  }, [])
  return <div id="disqus_thread"></div>
}

Comments.propTypes = {
  fullUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Comments
