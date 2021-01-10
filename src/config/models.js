import {folderOpen} from 'react-icons-kit/fa/folderOpen';
import {ic_supervisor_account} from 'react-icons-kit/md/ic_supervisor_account';
import {ic_assessment} from 'react-icons-kit/md/ic_assessment';
import {ic_assignment} from 'react-icons-kit/md/ic_assignment';
import {ic_find_in_page} from 'react-icons-kit/md/ic_find_in_page';
import {ic_add} from 'react-icons-kit/md/ic_add';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_save} from 'react-icons-kit/md/ic_save';
import {eye} from 'react-icons-kit/fa/eye';


export const models = {

    sidebarContext: [
        {
            href: "/clienti",
            icon: ic_supervisor_account,
            label: "Customers",
        },
        {
            href: "/folders",
            icon: folderOpen,
            label: "Pratiche",
        },
        {
            href: "/contabilita",
            icon: ic_assessment,
            label: "Contabilità",
        },
        {
            href: "/dafare",
            icon: ic_assignment,
            label: "Da fare",
        },
        {
            href: "/ricerche",
            icon: ic_find_in_page,
            label: "Ricerche",
        },
    ],    
    navbarContext: {
        clients: [
          {
            href: "/clienti/nuovo",
            icon: ic_add,
            size: 40,
          },
          {
            href: "/customers/",
            param: "selectedId",
            icon: ic_mode_edit,
            size: 30,
            disabled: "edit"
          },
          {
            href: "/folders/",
            param: "selectedId",
            icon: folderOpen,
            size: 30,
            disabled: "edit"
          }
        ],
        folders: [
          {
            href: "/folders/new",
            icon: ic_add,
            size: 40,
          },
          {
            href: "/folders/edit/",
            param: "selectedId",
            icon: ic_mode_edit,
            size: 30,
            disabled: "edit"
          },
          {
            href: "/folders/view/",
            param: "selectedId",
            icon: eye,
            size: 30,
            disabled: "edit"
          }
        ],
        newcustomer: [
          {
            href: "/clienti/nuovo",
            icon: ic_add,
            size: 40,
          },
          {
            href: "#",
            icon: ic_save,
            size: 30,
            onClick: "saveFunction"
          },
          {
            href: "/folders/",
            param: "selectedId",
            icon: folderOpen,
            size: 30,
            disabled: "selectedId"
          }
        ],
        editcustomer: [
          {
            href: "/clienti/nuovo",
            icon: ic_add,
            size: 40,
          },
          {
            href: "#",
            icon: ic_save,
            size: 30,
            onClick: "saveFunction"
          },
          {
            href: "/folders/",
            param: "selectedId",
            icon: folderOpen,
            size: 30,
            disabled: "selectedId"
          }
        ],
        folderspreview: [
          {
            href: "/folders/new",
            icon: ic_add,
            size: 40,
          },
          {
            href: "/folder/",
            param: "selectedId",
            icon: ic_mode_edit,
            size: 30,
            disabled: "edit"
          },  
        ]
    },   
}