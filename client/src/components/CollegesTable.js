import React from "react";
import {
  useTable,
  useFilters,
} from "react-table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";


// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;
  return (
    <FloatingLabel
      controlId="floatingInput"
      label={`Search ${count} records...`}
      className="mb-3"
    >
      <Form.Control
        type="text"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    </FloatingLabel>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.sort().map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id] || 0, min)
      max = Math.max(row.values[id] || 0, max)
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || max}
        onChange={(e) => {
          setFilter(e.target.value)
        }}
        step="50"
      />
      {filterValue}
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  );
}

// Define a custom filter filter function!
// Define a custom filter filter function!
function filterLessThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue <= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterLessThan.autoRemove = val => typeof val !== 'number'


function CollegesTable(props) {
  const filterTypes = React.useMemo(
    () => ({
      // // Add a new fuzzyTextFilterFn filter type.
      // fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const data = React.useMemo(() => props.data, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
        style: {
          width: "19vw",
          verticalAlign: "text-top",
        },
      },
      {
        Header: "City",
        accessor: "city",
        Filter: SelectColumnFilter,
        style: {
          width: "11vw",
          verticalAlign: "text-top",
        },
      },
      {
        Header: "State",
        accessor: "state",
        Filter: SelectColumnFilter,
        style: {
          width: "10vw",
          verticalAlign: "text-top",
        },
      },
      {
        Header: "Distance",
        accessor: "distance",
        Filter: SliderColumnFilter,
        filter: filterLessThan,
        style: {
          width: "4vw",
          verticalAlign: "text-top",
        },
      },
      {
        Header: "Disqualification Reason/s",
        accessor: "disqualified_reason",
        style: {
          width: "17vw",
          verticalAlign: "text-top",
        },
      },
      {
        Header: "Notes",
        accessor: "notes",
        style: {
          width: "20vw",
          verticalAlign: "text-top",
        },
      },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const defaultPropGetter = () => ({});
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    getColumnProps = defaultPropGetter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
  );

  // ,
  //   useGroupBy,
  //   useFilters,
  //   useSortBy,
  //   useExpanded,
  //   usePagination }

  return (
    <Container>
      <Row>
        <Col>
          <Table
            striped
            bordered
            hover
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      // Return an array of prop objects and react-table will merge them appropriately
                      {...column.getHeaderProps([
                        {
                          className: column.className,
                          style: column.style,
                        },
                        getColumnProps(column),
                      ])}
                    >
                      <Form.Label>{column.render("Header")}</Form.Label>
                      {/* Render the columns filter UI */}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default CollegesTable; // Don’t forget to use export default!
