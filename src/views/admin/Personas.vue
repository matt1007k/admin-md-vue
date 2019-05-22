<template>
  <v-container>
    <v-layout row wrap class="mb-3">
      <v-flex xs12>
        <v-card>
          <v-container fill-height fluid>
            <v-layout row wrap>
              <v-flex xs12 md9>
                <span class="headline">Lista de personas</span>
              </v-flex>
              <v-flex xs12 md3 justify-end flexbox>
                <v-btn color="primary">
                  <v-icon>$vuetify.icons.add</v-icon>Agregar persona
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fluid style="padding-bottom: 0; padding-top: 0">
            <v-text-field v-model="search" clearable label="Buscar" type="text">
              <template v-slot:prepend>
                <v-icon>$vuetify.icons.search</v-icon>
              </template>
              <template v-slot:append>
                <v-fade-transition leave-absolute>
                  <v-progress-circular v-if="loading" size="24" color="info" indeterminate></v-progress-circular>
                </v-fade-transition>
              </template>
            </v-text-field>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="personas"
          :search="search"
          rows-per-page-text="Mostrar"
          no-data-text="No hay registros"
          no-results-text="No hay registros encontrados"
          :pagination.sync="pagination"
          class="elevation-1"
          :rows-per-page-items="RowsPerPageItems"
        >
          <template v-slot:items="props">
            <td class="text-xs-center">{{ props.item.codigo_modular }}</td>
            <td>{{ props.item.apellido_paterno }} {{ props.item.apellido_materno }}, {{ props.item.nombre }}</td>
            <td class="text-xs-center">{{ props.item.dni }}</td>
            <td class="text-xs-center">{{ props.item.cargo }}</td>
            <td class="text-xs-center">
              <template v-if="props.item.estado === 'activo'">
                <v-chip
                  text-color="white"
                  color="success"
                  class="text-capitalize"
                  small
                >{{ props.item.estado }}</v-chip>
              </template>
              <template v-if="props.item.estado === 'cesante'">
                <v-chip
                  text-color="white"
                  color="purple"
                  class="text-capitalize"
                  small
                >{{ props.item.estado }}</v-chip>
              </template>
            </td>
            <td>
              <v-tooltip bottom>
                <v-btn color="info" fab small slot="activator">
                  <v-icon>$vuetify.icons.edit</v-icon>
                </v-btn>
                <span>Editar registro</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn color="error" fab small slot="activator">
                  <v-icon>$vuetify.icons.delete</v-icon>
                </v-btn>
                <span>Cambiar estado</span>
              </v-tooltip>
            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <!-- <v-pagination v-model="pagination.page" :length="pages"></v-pagination> -->
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      loading: false,
      pagination: {},
      RowsPerPageItems: [5, 10, 25, { text: "Todos", value: -1 }],
      selected: [],
      headers: [
        {
          text: "Codigo Modular",
          align: "left",
          sortable: false,
          value: "codigo_modular"
        },
        { text: "Nombre completo", value: "nombre" },
        { text: "DNI", value: "dni" },
        { text: "Cargo", value: "cargo" },
        { text: "Estado", value: "estado" }
      ],
      personas: [
        {
          nombre: "Frozen",
          apellido_paterno: "Yogurt",
          apellido_materno: "Fresa",
          codigo_modular: "1012345678",
          dni: "12345678",
          estado: "activo",
          cargo: "Docente"
        },
        {
          nombre: "Ice",
          apellido_paterno: "Cream",
          apellido_materno: "Sandwich",
          codigo_modular: "1085215975",
          dni: "85215975",
          estado: "activo",
          cargo: "Docente"
        },
        {
          nombre: "Eclair",
          apellido_paterno: "Dalo",
          apellido_materno: "Parian",
          codigo_modular: "1098725896",
          dni: "98725896",
          estado: "cesante",
          cargo: "Docente"
        },
        {
          nombre: "Cupcake",
          apellido_paterno: "Torta",
          apellido_materno: "Miel",
          codigo_modular: "1095168275",
          dni: "95168275",
          estado: "activo",
          cargo: "Docente"
        },
        {
          nombre: "Gingerbread",
          apellido_paterno: "Arriba",
          apellido_materno: "Abajo",
          codigo_modular: "1068575425",
          dni: "68575425",
          estado: "cesante",
          cargo: "Docente"
        },
        {
          nombre: "Jelly",
          apellido_paterno: "Bean",
          apellido_materno: "Gonzalo",
          codigo_modular: "1068975342",
          dni: "68975342",
          estado: "activo",
          cargo: "Docente"
        },
        {
          nombre: "Lollipop",
          apellido_paterno: "Senegal",
          apellido_materno: "Ramirez",
          codigo_modular: "1065495126",
          dni: "65495126",
          estado: "activo",
          cargo: "Docente"
        },
        {
          nombre: "Honeycomb",
          apellido_paterno: "Calderon",
          apellido_materno: "Florez",
          codigo_modular: "1065498752",
          dni: "65498752",
          estado: "cesante",
          cargo: "Docente"
        },
        {
          nombre: "Donut",
          apellido_paterno: "Costa",
          apellido_materno: "Suave",
          codigo_modular: "1095162347",
          dni: "95162347",
          estado: "activo",
          cargo: "Docente"
        },
        {
          nombre: "KitKat",
          apellido_paterno: "Yogurt",
          apellido_materno: "Elada",
          codigo_modular: "1052146589",
          dni: "52146589",
          estado: "cesante",
          cargo: "Docente"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.personas.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  }
};
</script>

<style>
</style>
