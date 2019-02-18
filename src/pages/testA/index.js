import React from 'react'

class A extends React.Component {
  login () {
    import('../../components/console').then(module => {
      var p = module.default
      p('A')
    })
  };

  render () {
    return (
      <div>
        <button onClick={() => {this.login()}}>A</button>
      </div>
    )
  }
}

export default A
