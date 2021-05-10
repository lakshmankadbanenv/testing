export const RESIDENT_ACCESSLEVELS = {
    id:4,
    type: "resident",
    name: "RESIDENT",
    action: true,
    permissions:  {
        "applications": {
            name: "Applications",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        },
        "sponsor-view": {
            name: "Sponsor View",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        },
        "application-form": {
            name: "Application Form",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        },
        "user": {
            name: "Manage Users",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        },
        "sites": {
            name: "Sites",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        },
        "directory": {
            name: "Directory",
            action: true,
            create: true,
            view: true,
            update: true,
            delete: true
        },
        "configurations": {
            name: "Configurations",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false,
            child: {
                "application-form": {
                    name: "Application Form",
                    action: false,
                    create: false,
                    view: false,
                    update: false,
                    delete: false
                },
                "item-cost": {
                    name: "Item Cost",
                    action: false,
                    create: false,
                    view: false,
                    update: false,
                    delete: false
                }
            }
        },
        "profile": {
            name: "My Profile",
            action: true,
            create: true,
            view: true,
            update: true,
            delete: true
        },
        "bioLabs-network": {
            name: "BioLabs Network",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        },
        "resident-companies": {
            name: "Resident Companies",
            action: false,
            create: false,
            view: false,
            update: false,
            delete: false
        }
    }
};
