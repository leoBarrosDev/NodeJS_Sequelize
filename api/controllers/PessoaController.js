
const database = require('../models')


//Método que lista todas as pessoas do banco de dados
class PessoaController {
    static async listaPessoas(req, res) {
        try {

            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)

        } catch {
            return res.status(500).json(error.message)
        }
    }

    //Método que lista apenas a pessoa cujo ID foi passado como parâmetro
    static async selecionaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Método que inseri uma pessoa no banco de dados
    static async criarPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Método que atualiza uma pessoa já existente
    static async atualizarPessoa(req, res) {
        const { id } = req.params
        const novosDados = req.body
        try {
            await database.Pessoas.update(novosDados, {
                where: { id: Number(id) }
            })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Método que deleta uma pessoa do banco de dados
    static async deletarPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
    static async selecionaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = {
            ...req.body, estudante_id: Number(estudanteId)
        }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novosDados = req.body
        try {
            await database.Matriculas.update(novosDados, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { id: Number(matriculaId) }
            })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = PessoaController