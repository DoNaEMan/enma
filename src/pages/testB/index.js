import React from 'react'

class B extends React.Component {
  login () {
    import('../../components/console').then(module => {
      var p = module.default
      p('B')
    })
  };

  render () {
    return (
      <div>
        <button onClick={() => {this.login()}}>B</button>
      </div>
    )
  }
}

export default B
