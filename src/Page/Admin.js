import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Form, FormGroup, CustomInput } from 'reactstrap';

export default class Admin extends Component {
    state = {
        fileImage: null
    }

    onImagesValidation = (element) => {
        const files = element.target.files
        try {
            if(element.target.files.length > 5) throw new Error("Select 5 Images Only")

            for(var i = 0; i < files.length; i++){
                if(files[i].size > 1000000) throw new Error('"' + files[i].name + '" More Than ' + Math.round(files[i].size / 1000000) + 'Mb')
            }

            this.setState({fileImage : files})

        } catch (error) {
            this.setState({imagesErrorMessage : error.message})
        }
    }

    submitForm = () => {
    
        var id_merk = Number (this.id_merk.value)
        var name = this.name.value
        var price = this.price.value
        var stock = this.stock.value
    
        var data = { 
            id_merk,
            name,
            price,
            stock
        } 
    
        let fd = new FormData()
            data = JSON.stringify(data)
    
            fd.append('data', data)
                for(var i = 0 ; i < this.state.fileImage.length ; i ++){
                    fd.append('image',this.state.fileImage[i])
            }
    
        Axios.post("http://localhost:5000/create-product", fd)
        .then((response) => {
            console.log(response)
            alert("Success")
            this.id_merk.value = ''
            this.name.value = ''
            this.price.value = ''
            this.stock.value = ''
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container" style={{ marginTop:'50px'}}>
                <h2 className="text-center">Campaign</h2>
                <p className="text-center mb-3">Tambahkan Data Campaign yang telah disetujui</p>
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-7 ">
                        <Form onSubmit={this.submitForm}>
                            <FormGroup>
                                <CustomInput
                                    type="file" 
                                    ref={(element) => this.file = element} 
                                    onChange={this.onImagesValidation} 
                                    multiple="multiple" accept="image/*"
                                />
                            </FormGroup>
                            <FormGroup>
                                <select
                                    className="form-control"
                                    ref={(el) => this.id_merk = el}
                                    id="exampleFormControlSelect1"
                                    placeholder="Category">
                                        <option value="1">Polygon</option>
                                        <option value="2">Brompton</option>
                                        <option value="3">BMX</option>
                                        <option value="4">Fixie</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <input
                                    className="form-control"
                                    ref={(el) => this.name = el}
                                    type="text"
                                    id="exampleName"
                                    placeholder="Name"/>
                            </FormGroup>
                            <FormGroup>
                                <input
                                    className="form-control"
                                    ref={(el) => this.price = el}
                                    type="text"
                                    id="examplePrice"
                                    placeholder="Price"/>
                            </FormGroup>
                            <FormGroup>
                                <input
                                    className="form-control"
                                    ref={(el) => this.stock = el}
                                    type="text"
                                    id="exampleStock"
                                    placeholder="Stock"/>
                            </FormGroup>
                            <Button onClick={this.submitForm}>Post Product</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}