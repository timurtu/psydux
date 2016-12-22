/**
 * Created by timur on 12/21/16.
 */

import { el } from 'psydux'

export const input = placeholder => el('input', { placeholder, class: 'form-control' })

export const form = (...elements) => el('form', () => elements)

export const button = ({ type, text }) => el('button', () => text, { class: `btn btn-${type} btn-block` })
