package com.subscriber.oauth.entity;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import java.util.List;

public class Role extends BaseIdEntity {

    private String name;
    @ManyToMany(fetch= FetchType.EAGER)
    @JoinTable(name="permission_role", joinColumns = {
            @JoinColumn(name="role_id" , referencedColumnName = "id")}, inverseJoinColumns = {
            @JoinColumn(name="permission_id", referencedColumnName = "id")
    })
    private List<Permission> permissions;
}
