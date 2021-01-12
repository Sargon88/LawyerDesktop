export const person = {
	"metadatas": {
		"id": {
			"edit": {},
			"list": {
				"label": "'Id'",
				"searchable": true,
				"sortable": true
			}
		},
		"person_name": {
			"edit": {
				"label": "'Nome'",
				"description": "",
				"placeholder": "",
				"visible": "{customerModel['person_type'] !== 'giuridico'}", 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Person_name'",
				"searchable": true,
				"sortable": true
			}
		},
		"person_surname": {
			"edit": {
				"label": "customerModel['person_type'] !== 'giuridico' ? 'Cognome' : 'Ragione Sociale'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Person_surname'",
				"searchable": true,
				"sortable": true
			}
		},
		"person_type": {
			"edit": {
				"label": "'Tipologia'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": "{customerModel[l.name] === null}"
			},
			"list": {
				"label": "'Person_type",
				"searchable": true,
				"sortable": true
			}
		},
		"person_code": {
			"edit": {
				"label": "customerModel['person_type'] !== 'giuridico' ? 'Codice Fiscale' : 'Partita iva'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Person_code",
				"searchable": true,
				"sortable": true
			}
		},
		"person_contact": {
			"edit": {
				"label": "'Contatti'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Person_contact'",
				"searchable": false,
				"sortable": false
			}
		},
		"person_address": {
			"edit": {
				"label": "'Indirizzo'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Person_address'",
				"searchable": false,
				"sortable": false
			}
		}
	}, 
	"layouts": {
		"list": ["id", "person_name", "person_surname", "person_type"],
		"edit": [
			[{
				"name": "person_name",
				"size": 6
			}, {
				"name": "person_surname",
				"size": "{customerModel['person_type'] !== 'giuridico' ? 6 : 12}",
			}],
			[{
				"name": "person_type",
				"size": 6
			}, {
				"name": "person_code",
				"size": 6
			}],
			[{
				"name": "person_contact",
				"size": 12
			}],
			[{
				"name": "person_address",
				"size": 12
			}]
		]
    },
    "attributes": {
		"person_name": {
			"type": "string"
		},
		"person_surname": {
			"type": "string"
		},
		"person_type": {
			"type": "enumeration",
			"enum": ["fisico", "giuridico", "controparte"]
		},
		"person_code": {
			"type": "string"
		},
		"person_contact": {
			"type": "component",
			"repeatable": false,
			"component": "contacts.contacts"
		},
		"person_address": {
			"type": "component",
			"repeatable": false,
			"component": "address.address"
		}
	}
}

export const referent = {
	"metadatas": {
		"id": {
			"edit": {},
			"list": {
				"label": "'Id",
				"searchable": false,
				"sortable": false
			}
		},
		"referent_role": {
			"edit": {
				"label": "'Ruolo'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Referent_role'",
				"searchable": true,
				"sortable": true
			}
		},
		"person": {
			"edit": {
				"label": "'Person'",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": false,
				"editable": true
			},
			"list": {}
		},
	},
	"layouts": {
		"list": ["id", "referent_role", "person"],
		"edit": [
			[{
				"name": "referent_role",
				"size": 12
			}],
			[{
				"name": "person",
				"size": 12
			}]
		]
	},
	"attributes": {
		"referent_role": {
			"type": "enumeration",
			"enum": ["legale", "amministratore", "tecnico"]
		},
		"person": {
			"type": "component",
			"repeatable": false,
			"component": "referent.person"
		}
	}
}

export const dossier = {
	"metadatas": {
		"id": {
			"edit": {},
			"list": {
				"label": "'Id",
				"searchable": true,
				"sortable": true
			}
		},
		"dossier_name": {
			"edit": {
				"label": "'Dossier_name",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Dossier_name",
				"searchable": true,
				"sortable": true
			}
		},
		"dossier_customer": {
			"edit": {
				"label": "'Dossier_customer",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true,
				"mainField": "person_name"
			},
			"list": {
				"label": "'Dossier_customer",
				"searchable": false,
				"sortable": false
			}
		},
		"dossier_counterpart": {
			"edit": {
				"label": "'Dossier_counterpart",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true,
				"mainField": "person_name"
			},
			"list": {
				"label": "'Dossier_counterpart",
				"searchable": false,
				"sortable": false
			}
		},
		"dossier_counterpartlawyer": {
			"edit": {
				"label": "'Dossier_counterpartlawyer",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true,
				"mainField": "person_name"
			},
			"list": {
				"label": "'Dossier_counterpartlawyer",
				"searchable": false,
				"sortable": false
			}
		},
		"dossier_issues": {
			"edit": {
				"label": "'Dossier_issues",
				"description": "",
				"placeholder": "",
				"visible": true, 
				"visible_label": true,
				"editable": true,
				"mainField": "iss_name"
			},
			"list": {
				"label": "'Dossier_issues",
				"searchable": false,
				"sortable": false
			}
		},
		"created_at": {
			"edit": {
				"label": "'Created_at",
				"description": "",
				"placeholder": "",
				"visible": false,
				"editable": true
			},
			"list": {
				"label": "'Created_at",
				"searchable": true,
				"sortable": true
			}
		},
		"updated_at": {
			"edit": {
				"label": "'Updated_at",
				"description": "",
				"placeholder": "",
				"visible": false,
				"editable": true
			},
			"list": {
				"label": "'Updated_at",
				"searchable": true,
				"sortable": true
			}
		}
	},
	"layouts": {
		"list": ["id", "dossier_name", "dossier_customer", "dossier_counterpart"],
		"edit": [
			[{
				"name": "dossier_name",
				"size": 6
			}]
		],
		"editRelations": ["dossier_customer", "dossier_counterpart", "dossier_counterpartlawyer", "dossier_issues"]
	}
}

export const issue = {
	"uid": "application::issue.issue",
	"settings": {
		"bulkable": true,
		"filterable": true,
		"searchable": true,
		"pageSize": 10,
		"mainField": "iss_name",
		"defaultSortBy": "iss_name",
		"defaultSortOrder": "ASC"
	},
	"metadatas": {
		"id": {
			"edit": {},
			"list": {
				"label": "'Id",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_status": {
			"edit": {
				"label": "'Iss_status",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_status",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_name": {
			"edit": {
				"label": "'Iss_name",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_name",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_type": {
			"edit": {
				"label": "'Iss_type",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_type",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_matter": {
			"edit": {
				"label": "'Iss_matter",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_matter",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_description": {
			"edit": {
				"label": "'Iss_description",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_description",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_feetype": {
			"edit": {
				"label": "'Iss_feetype",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_feetype",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_fee": {
			"edit": {
				"label": "'Iss_fee",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_fee",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_competence": {
			"edit": {
				"label": "'Iss_competence",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_competence",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_territory": {
			"edit": {
				"label": "'Iss_territory",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_territory",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_registro": {
			"edit": {
				"label": "'Iss_registro",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_registro",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_rg": {
			"edit": {
				"label": "'Iss_rg",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_rg",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_section": {
			"edit": {
				"label": "'Iss_section",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_section",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_judge": {
			"edit": {
				"label": "'Iss_judge",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_judge",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_value": {
			"edit": {
				"label": "'Iss_value",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_value",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_exempt": {
			"edit": {
				"label": "'Iss_exempt",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_exempt",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_payedunifiedcontribution": {
			"edit": {
				"label": "'Iss_payedunifiedcontribution",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_payedunifiedcontribution",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_unifiedcontibution": {
			"edit": {
				"label": "'Iss_unifiedcontibution",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_unifiedcontibution",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_stamp": {
			"edit": {
				"label": "'Iss_stamp",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_stamp",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_stampneeded": {
			"edit": {
				"label": "'Iss_stampneeded",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_stampneeded",
				"searchable": true,
				"sortable": true
			}
		},
		"iss_dossier": {
			"edit": {
				"label": "'Iss_dossier",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true,
				"mainField": "dossier_name"
			},
			"list": {
				"label": "'Iss_dossier",
				"searchable": false,
				"sortable": false
			}
		},
		"iss_deadline": {
			"edit": {
				"label": "'Iss_deadline",
				"description": "",
				"placeholder": "",
				"visible": true, 
"visible_label": true,
				"editable": true
			},
			"list": {
				"label": "'Iss_deadline",
				"searchable": true,
				"sortable": true
			}
		},
		"created_at": {
			"edit": {
				"label": "'Created_at",
				"description": "",
				"placeholder": "",
				"visible": false,
				"editable": true
			},
			"list": {
				"label": "'Created_at",
				"searchable": true,
				"sortable": true
			}
		},
		"updated_at": {
			"edit": {
				"label": "'Updated_at",
				"description": "",
				"placeholder": "",
				"visible": false,
				"editable": true
			},
			"list": {
				"label": "'Updated_at",
				"searchable": true,
				"sortable": true
			}
		}
	},
	"layouts": {
		"list": ["id", "iss_name", "iss_type", "iss_status"],
		"edit": [
			[{
				"name": "iss_name",
				"size": 6
			}],
			[{
				"name": "iss_type",
				"size": 6
			}, {
				"name": "iss_matter",
				"size": 6
			}],
			[{
				"name": "iss_description",
				"size": 6
			}, {
				"name": "iss_feetype",
				"size": 6
			}],
			[{
				"name": "iss_fee",
				"size": 4
			}, {
				"name": "iss_competence",
				"size": 6
			}],
			[{
				"name": "iss_territory",
				"size": 6
			}, {
				"name": "iss_registro",
				"size": 6
			}],
			[{
				"name": "iss_rg",
				"size": 6
			}, {
				"name": "iss_section",
				"size": 6
			}],
			[{
				"name": "iss_judge",
				"size": 6
			}, {
				"name": "iss_value",
				"size": 4
			}],
			[{
				"name": "iss_exempt",
				"size": 4
			}, {
				"name": "iss_payedunifiedcontribution",
				"size": 4
			}, {
				"name": "iss_unifiedcontibution",
				"size": 4
			}],
			[{
				"name": "iss_stamp",
				"size": 4
			}, {
				"name": "iss_stampneeded",
				"size": 4
			}, {
				"name": "iss_deadline",
				"size": 4
			}],
			[{
				"name": "iss_status",
				"size": 6
			}]
		],
		"editRelations": ["iss_dossier"]
	}
}

export const Components = {
    "contacts.contacts": {
        "metadatas": {
            "id": {
                "edit": {},
                "list": {
                    "label": "'Id'",
                    "searchable": false,
                    "sortable": false
                }
            },
            "cnn_mobile": {
                "edit": {
                    "label": "'Cellulare'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Cnn_mobile'",
                    "searchable": false,
                    "sortable": false
                }
            },
            "cnn_phone": {
                "edit": {
                    "label": "'Telefono'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Cnn_phone'",
                    "searchable": false,
                    "sortable": false
                }
            },
            "cnn_fax": {
                "edit": {
                    "label": "'Fax'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Cnn_fax'",
                    "searchable": false,
                    "sortable": false
                }
            },
            "cnn_mail": {
                "edit": {
                    "label": "'Email'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Cnn_mail'",
                    "searchable": true,
                    "sortable": true
                }
            },
            "cnn_pec": {
                "edit": {
                    "label": "'Pec'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Cnn_pec'",
                    "searchable": true,
                    "sortable": true
                }
            }
        },
        "layouts": {
            "list": ["id", "cnn_mail", "cnn_pec"],
            "edit": [
                [{
                    "name": "cnn_phone",
                    "size": 4
				}, 
				{
                    "name": "cnn_mobile",
                    "size": 4
				},
				{
                    "name": "cnn_fax",
                    "size": 4
                }],
                [{
                    "name": "cnn_mail",
                    "size": 6
                }, {
                    "name": "cnn_pec",
                    "size": 6
                }],
            ],
            "editRelations": []
        },
        "attributes": {
            "cnn_mobile": {
                "type": "component",
                "repeatable": false,
                "component": "contacts.phone-number"
            },
            "cnn_phone": {
                "type": "component",
                "repeatable": false,
                "component": "contacts.phone-number"
            },
            "cnn_fax": {
                "type": "component",
                "repeatable": false,
                "component": "contacts.phone-number"
            },
            "cnn_mail": {
                "type": "email"
            },
            "cnn_pec": {
                "type": "email"
            }
        },
        "isComponent": true
    },
    "address.address":{
        "metadatas": {
            "id": {
                "edit": {},
                "list": {
                    "label": "'Id",
                    "searchable": false,
                    "sortable": false
                }
            },
            "address_street": {
                "edit": {
                    "label": "'Via'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Address_street'",
                    "searchable": true,
                    "sortable": true
                }
            },
            "address_country": {
                "edit": {
                    "label": "'Stato'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Address_country'",
                    "searchable": true,
                    "sortable": true
                }
            },
            "address_number": {
                "edit": {
                    "label": "'Civico'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Address_number'",
                    "searchable": true,
                    "sortable": true
                }
            },
            "address_city": {
                "edit": {
                    "label": "'Città'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Address_city'",
                    "searchable": true,
                    "sortable": true
                }
            },
            "address_province": {
                "edit": {
                    "label": "'Provincia'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Address_province'",
                    "searchable": true,
                    "sortable": true
                }
            },
            "address_zipcode": {
                "edit": {
                    "label": "'CAP'",
                    "description": "",
                    "placeholder": "",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                },
                "list": {
                    "label": "'Address_zipcode'",
                    "searchable": true,
                    "sortable": true
                }
            }
        },
        "layouts": {
            "list": ["id", "address_street", "address_country", "address_number"],
            "edit": [
                [{
                    "name": "address_street",
                    "size": 10
				}, 
				{
                    "name": "address_number",
                    "size": 2
				}
				],
                [{
                    "name": "address_city",
                    "size": 6
				},
				{
                    "name": "address_province",
                    "size": 2
				},
				{
                    "name": "address_zipcode",
                    "size": 4
				}
				],
                [{
                    "name": "address_country",
                    "size": 12
				}]
            ],
            "editRelations": []
        },
        "attributes": {
            "address_street": {
                "type": "string"
            },
            "address_country": {
                "type": "string"
            },
            "address_number": {
                "type": "biginteger"
            },
            "address_city": {
                "type": "string"
            },
            "address_province": {
                "type": "string"
            },
            "address_zipcode": {
                "type": "biginteger"
            }
        },
    },
	"contacts.phone-number": {
		"metadatas": {
			"id": {
				"edit": {},
				"list": {
					"label": "'Id'",
					"searchable": false,
					"sortable": false
				}
			},
			"phone_number": {
				"edit": {
					"label": "'Phone_number'",
					"description": "",
					"placeholder": "",
					"visible": true, 
					"visible_label": false,
					"editable": true
				},
				"list": {
					"label": "'Phone_number'",
					"searchable": true,
					"sortable": true
				}
			}
		},
		"layouts": {
			"list": ["id", "phone_number"],
			"edit": [
				[{
					"name": "phone_number",
					"size": 12
				}]
			],
			"editRelations": []
		},
		"attributes": {
			"phone_number": {
				"type": "biginteger"
			}
		},
		"isComponent": true
	},
	"referent.person": {
		"metadatas": {
			"id": {
				"edit": {},
				"list": {
					"label": "'Id'",
					"searchable": true,
					"sortable": true
				}
			},
			"person_name": {
				"edit": {
					"label": "'Nome'",
					"description": "",
					"placeholder": "",
					"visible": false, 
					"visible_label": true,
					"editable": false
				}
			},
			"person_surname": {
				"edit": {
					"label": "'Cognome'",
					"description": "",
					"placeholder": "",
					"visible": false, 
					"visible_label": true,
					"editable": false
				}
			},
			"person_code": {
				"edit": {
					"label": "customerModel['person_type'] !== 'giuridico' ? 'Codice Fiscale' : 'Partita iva'",
					"description": "",
					"placeholder": "",
					"visible": true, 
					"visible_label": true,
					"editable": true
				}
			},
			"person_contact": {
				"edit": {
					"label": "'Contatti'",
					"description": "",
					"placeholder": "",
					"visible": true, 
					"visible_label": false,
					"editable": false
				}
			}
		}, 
		"layouts": {
			"edit": [
				[
				{
					"name": "person_code",
					"size": 12
				}],
				[{
					"name": "person_contact",
					"size": 12
				}]
			]
		},
		"attributes": {
			"person_name": {
				"type": "string"
			},
			"person_surname": {
				"type": "string"
			},
			"person_code": {
				"type": "string"
			},
			"person_contact": {
				"type": "component",
				"repeatable": false,
				"component": "referent.contacts"
			}
		}
	},
	"referent.contacts": {
        "metadatas": {
            "id": {
                "edit": {},
                "list": {
                    "label": "'Id'",
                    "searchable": false,
                    "sortable": false
                }
            },
            "cnn_mobile": {
                "edit": {
                    "label": "'Cellulare'",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                }
            },
            "cnn_phone": {
                "edit": {
                    "label": "'Telefono'",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                }
            },
            "cnn_fax": {
                "edit": {
                    "label": "'Fax'",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                }
            },
            "cnn_mail": {
                "edit": {
                    "label": "'Email'",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                }
            },
            "cnn_pec": {
                "edit": {
                    "label": "'Pec'",
                    "visible": true, 
					"visible_label": true,
                    "editable": true
                }
            }
        },
        "layouts": {
            "edit": [
                [{
                    "name": "cnn_phone",
                    "size": 12
				}], 
				[{
                    "name": "cnn_mobile",
                    "size": 12
				}],
				[{
                    "name": "cnn_fax",
                    "size": 12
                }],
                [{
                    "name": "cnn_mail",
                    "size": 12
				}], 
				[{
                    "name": "cnn_pec",
                    "size": 12
                }],
            ],
        },
        "attributes": {
            "cnn_mobile": {
                "type": "component",
                "repeatable": false,
                "component": "contacts.phone-number"
            },
            "cnn_phone": {
                "type": "component",
                "repeatable": false,
                "component": "contacts.phone-number"
            },
            "cnn_fax": {
                "type": "component",
                "repeatable": false,
                "component": "contacts.phone-number"
            },
            "cnn_mail": {
                "type": "email"
            },
            "cnn_pec": {
                "type": "email"
            }
        },
        "isComponent": true
    },
}