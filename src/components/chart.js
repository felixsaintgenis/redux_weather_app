import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {

  return (
        <div>
            <Sparklines height={30} width={50} data={props.data}>
                        <SparklinesLine color={props.color} />
                    </Sparklines>
        </div>             
        )
    }
