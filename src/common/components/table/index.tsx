"use client";
import { useTable } from "react-table";
import scrollbar from "@/assets/styles/scrollbar.module.css";
import { MoonLoader } from "react-spinners";

type TableProps = {
    columns: any;
    data: any[];
    loading?: boolean;
};

export function Table({ columns, data, loading }: TableProps) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    if (loading && !data.length) {
        return (
            <div className='min-h-[20rem] max-h-full flex flex-col gap-y-2 justify-center items-center '>
                <MoonLoader color='#0F3DB4' size={50} />
                <p className='animate-pulse mt-2 text-sm text-gray-800'>
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className=' relative'>
            <div className={`overflow-x-auto ${scrollbar.no_scrollbar}`}>
                <table
                    {...getTableProps()}
                    className='w-full  border-separate border-spacing-y-4 text-center'>
                    <thead className='text-left'>
                        {headerGroups.map((headerGroup, idx) => (
                            <tr
                                {...headerGroup.getHeaderGroupProps()}
                                key={idx}>
                                {headerGroup.headers.map((column, idxx) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className='pr-[2rem] pb-[1rem] whitespace-nowrap text-[#111111] text-xs font-medium tracking-[1.625px] uppercase'
                                        key={idxx}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, idx) => {
                            prepareRow(row);
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    key={idx}
                                    className={``}>
                                    {row.cells.map((cell, idxx) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className='pt-4 pb-3   px-1   text-left whitespace-nowrap   text-[#161C2D]  pr-[2rem]  text-sm'
                                                key={idxx}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {!loading && data.length === 0 && (
                <div className='text-center min-h-[10rem]  flex justify-center items-center '>
                    <p className='text-[#8D8F9A]'>No Data 😒</p>
                </div>
            )}
            {loading && data.length !== 0 && (
                <div className=' transition-all duration-300 absolute backdrop-blur-sm top-0 left-0 w-full h-full flex flex-col items-center'>
                    <div className='pt-[3rem]'>
                        <MoonLoader color='#0F3DB4' size={50} />
                        <p className='animate-pulse mt-2 text-sm text-gray-800'>
                            Loading...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
