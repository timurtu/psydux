/**
 * Created by timur on 12/19/2016.
 */

import { state } from '../dist/psydux'

describe('state', function () {

  describe('get', function () {

    it('should return an object', function () {
      expect(state.get()).to.be.an('object')
    })

    it('should be empty without setting state', function () {
      expect(state.get()).to.be.empty
    })
  })

  describe('set', function () {

    it('should set a value', function () {
      state.set({ name: 'Timur' })
      expect(state.get()).to.deep.equal({ name: 'Timur' })
    })

    it('should set a new value', function () {
      state.set({ name: 'Timur' })
      state.set({ name: 'Uzel' })
      expect(state.get()).to.deep.equal({ name: 'Uzel' })
    })

  })

})
