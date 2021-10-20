import React, { forwardRef, useRef } from 'react';
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

import Card from './card';
import { POSTER_URL } from '../common/common';
import './list.css';

type ListProps = {
    data: { name: string, 'poster-image': string }[]
    loadMore: (pageNumber: number) => void;
    rowHeight?: number;
    itemCount?: number;
    rowCount?: number;
    columnCount?: number;
}

export default function List(props: ListProps) {
    const { data, loadMore, rowHeight = 220, columnCount=3, rowCount = 25, itemCount = 100 } = props;
    const pageNumber = useRef(1);
    const isItemLoaded = (index: number) => {
        return !!data[index]
    }

    const Cell = (cellProps: any) => {
        const { columnIndex, rowIndex, data, style, } = cellProps;
        const index = rowIndex * 2 + columnIndex;

        return (
            <div
                className={"GridItem bg-black"}
                style={{
                    ...style,
                    left: style.left,
                    top: style.top,
                    width: style.width,
                    height: style.height
                }}
            >
                {data[index] ?
                    <Card
                        coverImage={POSTER_URL(data[index]['poster-image'])}
                        title={data[index].name}
                    />
                    :
                    <div className="text-white h-full flex items-center justify-center text-center">
                        {/* Loading... */}
                    </div>
                }
            </div>
        )
    };

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
        <div className="flex-1 h-full mt-3 pb-3">
            <InfiniteLoader
                threshold={6}
                isItemLoaded={isItemLoaded}
                itemCount={Math.min(data.length + 8, itemCount)}
                loadMoreItems={(i) => {
                    pageNumber.current += 1;
                        loadMore(pageNumber.current)
                }}
            >
                {({ onItemsRendered, ref }: any) => {
                    const newItemsRendered = (gridData: any) => {
                        const {
                            overscanRowStartIndex,
                            overscanRowStopIndex,
                            overscanColumnStopIndex
                        } = gridData;

                        const endCol = overscanColumnStopIndex
                        const startRow =overscanRowStartIndex
                        const endRow =overscanRowStopIndex

                        const visibleStartIndex = startRow * 2;
                        const visibleStopIndex = endRow * 2 + endCol;

                        onItemsRendered({
                            //call onItemsRendered from InfiniteLoader so it can load more if needed
                            visibleStartIndex,
                            visibleStopIndex
                        });
                    };
                    return (
                        <AutoSizer>
                            {({ height, width }) => {
                                return (
                                    <Grid
                                        className="Grid"
                                        columnCount={columnCount}
                                        columnWidth={width / columnCount}
                                        height={height}
                                        innerElementType={innerElementType}
                                        rowCount={rowCount}
                                        rowHeight={rowHeight}
                                        width={width}
                                        itemData={data}
                                        onItemsRendered={newItemsRendered}
                                        ref={ref}
                                    >
                                        {Cell}
                                    </Grid>
                                )
                            }}
                        </AutoSizer>
                    )
                }}
            </InfiniteLoader>
        </div>
    )
}
