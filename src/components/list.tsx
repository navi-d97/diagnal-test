import React, { forwardRef } from 'react';
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

// import Card from './card';

export default function List() {

    const Cell = ({ columnIndex, rowIndex, style }: any) => (
        <div
            className={"GridItem"}
            style={{
                ...style,
                left: style.left,
                top: style.top,
                width: style.width,
                height: style.height
            }}
        >
            {/* TODO:
            <Card coverImage={pic1} title="Picture 1" /> */}
        </div>
    );

    const innerElementType = forwardRef(({ style, ...rest }: any, ref) => (
        <div
            ref={ref}
            style={{
                ...style,
            }}
            {...rest}
        />
    ));

    return (
        <div className="flex-1 h-screen">
            <AutoSizer>
                {({ height, width }) => (
                    <Grid
                        className="Grid"
                        columnCount={3}
                        columnWidth={width/3}
                        height={height}
                        innerElementType={innerElementType}
                        rowCount={100}
                        rowHeight={height/3}
                        width={width}
                    >
                        {Cell}
                    </Grid>
                )}
            </AutoSizer>
        </div>
    )
}
