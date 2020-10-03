import React, { useState } from "react";
import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";


interface State {
    chosenInputFile: string;
    chosenOutputFolder: string;
    chosenFieldName: string;
    chosenOutputName: string;
    loading: boolean;
    finished: boolean;
}


export default function Append () {
    const [ state, setState ] = useState({
        chosenInputFile: "Choose File",
        chosenOutputFolder: "Choose Folder",
        chosenFieldName: "Choose Field",
        loading: false,
        finished: false
    } as State);
    const [ allColumns, setAllColumns ] = useState([ "test" ]);
    const [outputName, setOutputName] = useState("");
    
    const handleOutputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target) {
            setOutputName(event.target.value);
        }
    };
    const handleFieldNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target && event.target.value) {
            setState(prevState => ({
                ...prevState,
                chosenFieldName: event.target.value
            }));
        }
    };
    const handleStartProcess = () => {
        if (state.loading) {
            return;
        }
        
        setState(prevState => ({
            ...prevState,
            loading: true,
            finished: false
        }));
        
        // @ts-ignore
        window.ipcRenderer.invoke("event-startProcess", {
            inputFile: state.chosenInputFile,
            outputFolder: state.chosenOutputFolder,
            outputName,
            fieldName: state.chosenFieldName
        }).then(response => {
            setState(prevState => ({
                ...prevState,
                loading: false,
                finished: true
            }));
        });
    };
    
    /*
    useEffect(() => {
        // @ts-ignore
        window.ipcRenderer.invoke("append-getColumns");
    }, []);*/
    
    return (
        <>
            <div className="container">
                <h1 className="display-3 text-center">Append Page</h1>
                
                <div className="row mt-10 pt-10">
                    { state.finished && (
                        <div
                            className={ "col-lg-6 col-md-8 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3 mb-10" }
                        >
                            <Alert
                                variant="outlined"
                                severity="success"
                                color="success"
                            >
                                Successfully retrieved and exported values!
                            </Alert>
                        </div>
                    ) }
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3">
                        {/* Input File */ }
                        <div className="form-group">
                            <label>Choose Input File</label>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="input-file"
                                    onClick={ (e) => {
                                        e.preventDefault();
                                        
                                        // @ts-ignore
                                        window.ipcRenderer.invoke("append-selectInputFile").then(res => {
                                            if (res.chosen) {
                                                setState(prevState => ({
                                                    ...prevState,
                                                    chosenInputFile: res.chosen as string
                                                }));
                                            }
                                        });
                                    } }
                                />
                                <label className="custom-file-label" htmlFor="input-file">
                                    {
                                        state.chosenInputFile
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3">
                        {/* Output Folder */ }
                        <div className="form-group">
                            <label>Choose Output Folder</label>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="input-file"
                                    onClick={ (e) => {
                                        e.preventDefault();
                                        
                                        // @ts-ignore
                                        window.ipcRenderer.invoke("append-selectOutputFolder").then(res => {
                                            if (res.chosen) {
                                                setState(prevState => ({
                                                    ...prevState,
                                                    chosenOutputFolder: res.chosen as string
                                                }));
                                            }
                                        });
                                    } }
                                />
                                <label className="custom-file-label" htmlFor="input-file">
                                    {
                                        state.chosenOutputFolder
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3">
                        {/* Output Name */}
                        <div className="form-group">
                            <label>Output file name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={outputName}
                                onChange={handleOutputNameChange}
                            />
                            <span className="form-text text-muted">
                                .csv extension will be applied automatically
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3">
                        {/* Fields Input */ }
                        <div className="form-group">
                            <label>Choose Field</label>
                            <select className="custom-select form-control" onChange={handleFieldNameChange}>
                                <option selected={ true }>Choose the field</option>
                                {
                                    allColumns.map(columnName => (
                                        <option value={ columnName }>{ columnName }</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    
                    <br/>
                    
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-sm-1 offset-md-2 offset-lg-3">
                        <LinearProgress
                            variant={ (state.loading && "indeterminate") || "determinate" }
                            value={ 100 }
                        />
                        {/* Input File */ }
                        <div className="form-group mt-5">
                            <button
                                type="reset"
                                className="btn btn-primary btn-block mr-2"
                                onClick={handleStartProcess}
                                disabled={state.loading}
                            >
                                Start Retrieving Records
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
