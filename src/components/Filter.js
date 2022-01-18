import React from 'react'

const Filter = ( { handler, word } ) =>
    <div>
        find countries <input
            value={word}
            onChange={handler} />
    </div>

export default Filter