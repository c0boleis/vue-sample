<template>
  <nav class="p-3">
    <SidebarSection label="Personnes">
      <SidebarLink label="Catéchuménat" icon="fa-solid:cross-circle-user" beta/>
    </SidebarSection>
    <SidebarSection label="Groupes et activités">
      <SidebarLink
        label="Gérer les groupes"
        to="/groupe"
        icon="fa-solid:users"
      />
      <SidebarLink
        label="Mes agrégats"
        to="/agregat/all"
        icon="fa-solid:folder-tree"
      />
    </SidebarSection>
  </nav>
</template>